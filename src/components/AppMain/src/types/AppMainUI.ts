import type { ClassName } from "../../../../types/ClassName";

export interface AppMainUI {
    nodes?: {
        root?: ClassName[],
        section?: ClassName[],
    },
    variants?: {
        header?: {
            default?: {
                root?: ClassName[],
            },
            collapsed?: {
                root?: ClassName[],
            },
        },
    },
};
