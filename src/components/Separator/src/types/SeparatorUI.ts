import type { ClassName } from "../../../../types/ClassName";

export interface SeparatorUI {
    nodes?: {
        root?: ClassName[],
        border?: ClassName[],
    },
    slots?: {
        default?: ClassName[],
    },
    variants?: {
        type?: {
            solid?: {
                border?: ClassName[],
            },
            dotted?: {
                border?: ClassName[],
            },
            dashed?: {
                border?: ClassName[],
            },
            double?: {
                border?: ClassName[],
            },
        },
        orientation?: {
            vertical?: {
                root?: ClassName[],
                border?: ClassName[],
                default?: ClassName[],
            },
            horizontal?: {
                root?: ClassName[],
                border?: ClassName[],
                default?: ClassName[],
            },
        },
    },
};
