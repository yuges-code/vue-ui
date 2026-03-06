import type { ClassName } from "../../../../types/ClassName";

export interface AppMainUI {
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
