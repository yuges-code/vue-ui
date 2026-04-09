import type { ClassName } from "../../../../types/ClassName";

export interface NavigationUI {
    nodes?: {
        root?: ClassName[],
        list?: ClassName[],
        separator?: ClassName[],
    },
    variants?: {
        orientation?: {
            vertical?: {
                root?: ClassName[],
                separator?: ClassName[],
            },
            horizontal?: {
                root?: ClassName[],
                separator?: ClassName[],
            },
        },
    },
};
