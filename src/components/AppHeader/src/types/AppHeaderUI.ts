import type { ClassName } from "../../../../types/ClassName";

export interface AppHeaderUI {
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
