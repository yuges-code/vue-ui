import { ClassName } from "../types/ClassName";
import type { AppMainUI } from "../components/AppMain/src/types/AppMainUI";

const appMainUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-grow'],
            ClassName['min-size-full'],
        ],
    },
    variants: {
        collapsed: {
            true: {
                root: [],
            },
            false: {
                root: [ClassName['min-w-full']],
            }
        },
    },
} satisfies AppMainUI;

export default appMainUI;
