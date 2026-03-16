import type { ClassName } from "../../../../types/ClassName";

export type ListType = ''

export interface ListUI {
    nodes?: {
        root?: ClassName[],
    },
    variants?: {
        marker?: {
            disc?: {
                root: ClassName[],
            },
            decimal?: {
                root: ClassName[],
            },
            none?: {
                root: ClassName[],
            },
        },
        indentation?: {
            true?: {
                root: ClassName[],
            },
            false?: {
                root: ClassName[],
            },
        },
    },
};
