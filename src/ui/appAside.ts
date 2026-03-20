import { ClassName } from "../types/ClassName";
import type { AppAsideUI } from "../components/AppAside/src/types/AppAsideUI";

const appAsideUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-column'],
            ClassName['position-fixed'],
            ClassName['top-0'],
            ClassName['bottom-0'],
            ClassName['z-40'],
        ],
        section: [
            ClassName['d-flex'],
            ClassName['flex-column'],
            ClassName['min-size-full'],
            ClassName['pl-3'],
        ],
    },
    variants: {
        location: {
            left: {
                root: [ClassName['left-0'], ClassName['aside-left']],
            },
            right: {
                root: [ClassName['right-0'], ClassName['aside-right']],
            },
        },
        collapsed: {
            true: {
                root: [],
                location: {
                    left: {
                        root: [ClassName['aside-left-collapsed']],
                    },
                    right: {
                        root: [ClassName['aside-right-collapsed']],
                    },
                },
            },
            false: {
                root: [],
                location: {},
            },
        },
    },
} satisfies AppAsideUI;

export default appAsideUI;
