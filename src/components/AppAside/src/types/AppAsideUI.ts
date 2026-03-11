import type { ClassName } from "../../../../types/ClassName";

export interface AppAsideUI {
    nodes?: {
        root?: ClassName[],
    },
    variants?: {
        location?: {
            left?: {
                root?: ClassName[],
            },
            right?: {
                root?: ClassName[],
            },
        },
        collapsed?: {
            true?: {
                location?: {
                    left?: {
                        root?: ClassName[],
                    },
                    right?: {
                        root?: ClassName[],
                    },
                },
            },
            false?: {
                location?: {
                    left?: {
                        root?: ClassName[],
                    },
                    right?: {
                        root?: ClassName[],
                    },
                },
            },
        },
    },
};
