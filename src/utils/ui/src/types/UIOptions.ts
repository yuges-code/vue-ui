import { createNodes } from "..";
import type { ClassName } from "../../../../types/ClassName";

export interface UINodes {
    [key: string]: ClassName[] | UINodes | undefined;
};

export type UINodesClear<T extends UINodes | undefined = UINodes | undefined> = {
    [key in keyof T ]?: T[key] extends UINodes ? UINodesClear<T[key]> : ClassName[];
};

export interface UISlots {
    [key: string]: ClassName[] | undefined;
};

export type UISlotsClear<T extends UISlots | undefined = UISlots | undefined> = {
    [key in keyof T ]?: T[key] extends UISlots ? UISlotsClear<T[key]> : ClassName[];
};

export interface UIVariants<
    T extends UINodes | undefined = UINodes | undefined,
    U extends UISlots | undefined = UISlots | undefined,
> {
    [name: string]: {
        [variant: string]: {
            nodes?: UINodesClear<T>,
            slots?: UISlotsClear<U>,
        } | undefined,
    } | undefined;
};

export type UICombinations<
    T extends UINodes | undefined = UINodes | undefined,
    U extends UISlots | undefined = UISlots | undefined,
    S extends UIVariants<T, U> | undefined = UIVariants<T, U> | undefined,
> = {
    variants?: {
        [variant in keyof S]?: keyof S[variant] | (keyof S[variant])[];
    },
    nodes?: UINodesClear<T>,
    slots?: UISlotsClear<U>,
}[];

// interface UIDefault {

// }

export interface UIOptions {
    nodes?: UINodes,
    slots?: UISlots,
    variants?: UIVariants<
        UIOptions['nodes'],
        UIOptions['slots']
    >,
    combinations?: UICombinations<
        UIOptions['nodes'],
        UIOptions['slots'],
        UIVariants<
            UIOptions['nodes'],
            UIOptions['slots']
        >
    >,
};

const nodes = {
    root: ['align-items-end', 'size-1'],
    icon: {
        append: ['active'],
        prepend: ['aside-left'],
    },
} satisfies UINodes;

const slots = {
    default: ['border'],
} satisfies UISlots;

const variants = {
    size: {
        xl: {
            nodes: {
                root: ['align-items-center'],
                icon: {
                    append: ['btn-3xl'],
                    prepend: ['border-gray'],
                }
            },
            slots: {
                default: ['border-0'],
            },
        },
    },
} satisfies UIVariants<typeof nodes, typeof slots>;

const combinations = [
    {
        variants: {
            size: 'xl',
        },
        nodes: { root: ['align-items-start', 'bg-default'], icon: {append: ['align-items-center']} },
        slots: { default: ['align-items-start'] },
    }
] satisfies UICombinations<typeof nodes, typeof slots, typeof variants>;

const options = {
    nodes: nodes,
    slots: slots,
    variants: variants,
    combinations: combinations,
};

const { root, icon } = createNodes(options.nodes, options.variants);

root({size: 'xl'});
icon.prepend({size: 'xl'});

// const { nodes, slots } = ui(options.nodes, options.slots, options.variants, options.combinations);
