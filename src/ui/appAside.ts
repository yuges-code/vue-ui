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
    },
    variants: {
        location: {
            left: {
                root: [ClassName['start-0'], ClassName['aside-left']],
            },
            right: {
                root: [ClassName['end-0'], ClassName['aside-right']],
            },
        },
        collapsed: {
            true: {
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
                location: {},
            },
        },
    },
} satisfies AppAsideUI;

export default appAsideUI;
