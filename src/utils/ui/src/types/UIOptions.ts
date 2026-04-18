import type { ClassName } from "../../../../types/ClassName";

export interface UINodes {
    [key: string]: ClassName[] | UINodes | undefined;
};

export type UINodesClear<T extends UINodes | undefined = UINodes | undefined> = {
    [key in keyof T ]?:
        T[key] extends ClassName[] ? ClassName[] :
        T[key] extends UINodes | undefined ? UINodesClear<T[key]> :
        T[key];
};

export interface UISlots {
    [key: string]: ClassName[] | undefined;
};

export type UISlotsClear<T extends UISlots | undefined = UISlots | undefined> = {
    [key in keyof T ]?:
        T[key] extends ClassName[] ? ClassName[] :
        T[key] extends UISlots | undefined ? UISlotsClear<T[key]> :
        T[key];
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
        [variant in keyof S]?: (keyof NonNullable<S[variant]> | (keyof NonNullable<S[variant]>)[]);
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
