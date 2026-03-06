import type { ClassName } from "../../../../types/ClassName";

export interface HeaderUI {
    nodes?: {
        root?: ClassName[],
    },
    variants?: {
        collapsed?: {
            true?: {
                root?: ClassName[],
            },
            false?: {
                root?: ClassName[],
            },
        },
    },
};
