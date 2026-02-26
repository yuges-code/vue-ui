import type { ClassName } from "../../../../types/ClassName";

export interface ButtonUI {
    nodes?: {
        root?: ClassName[],
    },
    variants?: {
        disabled?: {
            true?: {
                root?: ClassName[],
            },
            false?: {
                root?: ClassName[],
            },
        },
    },
};
