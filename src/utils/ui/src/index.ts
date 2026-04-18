import { findDeep } from "../../find";
import { mergeClasslist } from "../../mergeClasslist";
import type { ClassName } from "../../../types/ClassName";
import type { UINodes, UISlots, UIVariants, UICombinations } from "./types/UIOptions";

type UINodeCollection<Nodes extends UINodes, Variants extends UIVariants | undefined> = {
    [key in keyof Nodes]:
        NonNullable<Nodes[key]> extends UINodes
            ? UINodeCollection<NonNullable<Nodes[key]>, Variants>
            : (variants?: { [variant in keyof Variants]?: keyof NonNullable<Variants[variant]> }) => ClassName[];
};

type UISlotCollection<Slots extends UISlots, Variants extends UIVariants | undefined> = {
    [key in keyof Slots]:
        NonNullable<Slots[key]> extends UISlots
            ? UISlotCollection<NonNullable<Slots[key]>, Variants>
            : (variants?: { [variant in keyof Variants]?: keyof NonNullable<Variants[variant]> }) => ClassName[];
};

function isUINodes(nodes: any): nodes is UINodes {
    return nodes && !Array.isArray(nodes) && typeof nodes === 'object';
}
function isUISlots(slots: any): slots is UISlots {
    return slots && !Array.isArray(slots) && typeof slots === 'object';
}

const findCombination = (variants?: { [key: string]: string }, combinations?: UICombinations) => {
    let count = 0;
    let match = undefined;

    if (! variants || !combinations) {
        return undefined;
    }

    for (const combination of combinations) {
        if  (! combination.variants) {
            continue;
        }

        const keys = Object.keys(combination.variants);

        const is = keys.every(key => {
            if (! variants.hasOwnProperty(key) || ! variants?.[key] ) {
                return false;
            }

            if (variants[key] === combination.variants?.[key]) {
                return true;
            }

            if (
                Array.isArray(combination.variants?.[key]) &&
                combination.variants?.[key].includes(variants[key])
            ) {
                return true;
            }

            return false;
        });

        if (is && keys.length >= count) {
            count = keys.length;
            match = combination;
        }
    }

    return match;
};

function generateClasses(
    type: 'nodes' | 'slots',
    element: string,
    variants?: {},
    options?: {nodes?: UINodes, slots?: UISlots, variants?: UIVariants, combinations?: UICombinations}
): ClassName[]
{
    let classes = {
        element: findDeep(options?.[type], (value, key) => Array.isArray(value) && key === element) as [] | undefined,
        variant: [] as any[],
        combinations: [] as any[] | undefined,
    }

    if (! variants) {
        return classes.element || [];
    }

    for (const name of Object.keys(variants) as (keyof typeof variants)[]) {
        const variant =  variants[name];

        const result = findDeep(
            options?.variants?.[name]?.[variant]?.[type],
            (value, key) => Array.isArray(value) && key === element
        )

        if (result) {
            classes.variant = [
                ...classes.variant,
                ...result
            ];
        }
    }

    const combination = findCombination(variants, options?.combinations);

    if (combination) {
        classes.combinations = findDeep(combination?.[type], (value, key) => Array.isArray(value) && key === element);
    }

    return mergeClasslist(
        classes.element || [] as ClassName[],
        classes.variant || [] as ClassName[],
        classes.combinations || [] as ClassName[],
    ) as ClassName[];
}

function createNodes<
    Nodes extends UINodes | undefined,
    Variants extends UIVariants<Nodes, UISlots | undefined> | undefined,
    Combinations extends UICombinations<Nodes, UISlots | undefined, Variants> | undefined,
>(nodes: Nodes, variants: Variants, combinations: Combinations)
{
    let ui = {} as UINodeCollection<NonNullable<typeof nodes>, typeof variants>;

    const options = {
        nodes: nodes,
        variants: variants,
        combinations: combinations,
    };

    if (! nodes) {
        return ui;
    }

    const keys = Object.keys(nodes) as (keyof typeof nodes)[];

    keys.forEach(key => {
        ui[key] = isUINodes(nodes[key])
            ? createNodes(nodes[key], variants as any, combinations as any) as any
            : (variants?: { [variant in keyof Variants]?: keyof Variants[variant] }): ClassName[] => {
                return generateClasses('nodes', key as string, variants, options as any);
            };
    });

    return ui;
}

function createSlots<
    Slots extends UISlots | undefined,
    Variants extends UIVariants<UINodes | undefined, Slots> | undefined,
    Combinations extends UICombinations<UINodes | undefined, Slots, Variants> | undefined,
>(slots: Slots, variants: Variants, combinations: Combinations)
{
    let ui = {} as UISlotCollection<NonNullable<typeof slots>, typeof variants>;

    const options = {
        slots: slots,
        variants: variants,
        combinations: combinations,
    };

    if (! slots) {
        return ui;
    }

    const keys = Object.keys(slots) as (keyof typeof slots)[];

    keys.forEach(key => {
        ui[key] = isUISlots(slots[key])
            ? createSlots(slots[key], variants as any, combinations as any) as any
            : (variants?: { [variant in keyof Variants]?: keyof Variants[variant] }): ClassName[] => {
                return generateClasses('slots', key as string, variants, options as any);
            };
    });

    return ui;
}

const ui = <
    Nodes extends UINodes | undefined,
    Slots extends UISlots | undefined,
    Variants extends UIVariants<Nodes, Slots> | undefined,
    Combinations extends UICombinations<Nodes, Slots, Variants> | undefined,
>(
    nodes: Nodes,
    slots: Slots,
    variants: Variants,
    combinations: Combinations,
): {
    nodes: UINodeCollection<NonNullable<Nodes>, Variants>,
    slots: UISlotCollection<NonNullable<Slots>, Variants>,
} => {
    slots;

    return {
        nodes: createNodes(nodes, variants, combinations as any),
        slots: createSlots(slots, variants, combinations as any),
    };
};

export { ui };
