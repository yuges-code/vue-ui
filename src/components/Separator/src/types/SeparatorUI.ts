import type { ClassName } from "../../../../types/ClassName";

export interface SeparatorUI {
    nodes?: {
        root?: ClassName[],
        border?: ClassName[],
    },
    slots?: {
        default?: ClassName[],
    }
};
