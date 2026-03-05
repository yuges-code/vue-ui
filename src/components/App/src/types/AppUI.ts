import type { ClassName } from "../../../../types/ClassName";

export interface AppUI {
    nodes?: {
        root?: ClassName[],
    },
    variants?: {
        mode?: {
            window?: {
                root?: ClassName[],
            },
            fullscreen?: {
                root?: ClassName[],
            },
        },
    },
};
