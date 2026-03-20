import type { ClassName } from "../../../../types/ClassName";

export interface AppAsideUI {
    nodes?: {
        root?: ClassName[],
        section?: ClassName[],
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
                root?: ClassName[],
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
                root?: ClassName[],
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
