import { ClassName } from "../types/ClassName";
import type { AppAsideUI } from "../components/AppAside/src/types/AppAsideUI";

const appAsideUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-column'],
            ClassName['position-fixed'],
            ClassName['top-0'],
            ClassName['start-0'],
            ClassName['bottom-0'],
        ],
    },
    variants: {
        collapsed: {
            true: {
                root: [],
            },
            false: {
                root: [],
            }
        },
    },
} satisfies AppAsideUI;

export default appAsideUI;
