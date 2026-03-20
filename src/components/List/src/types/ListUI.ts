import type { ClassName } from "../../../../types/ClassName";

export interface ListUI {
    nodes?: {
        root?: ClassName[],
        item?: ClassName[],
        child?: {
            root?: ClassName[],
            item?: ClassName[],
        },
    },
    variants?: {
        marker?: {
            disc?: {
                root?: ClassName[],
            },
            decimal?: {
                root?: ClassName[],
            },
            none?: {
                root?: ClassName[],
            },
        },
        indentation?: {
            true?: {
                root?: ClassName[],
                child?: {
                    root?: ClassName[],
                },
            },
            false?: {
                root?: ClassName[],
                child?: {
                    root?: ClassName[],
                },
            },
        },
    },
};
