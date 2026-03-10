import { ClassName } from "../types/ClassName";
import type { AppMainUI } from "../components/AppMain/src/types/AppMainUI";

const appMainUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-grow'],
            ClassName['min-size-full'],
        ],
        section: [ClassName['min-size-full']],
    },
    variants: {
        header: {
            default: {
                root: [ClassName['with-header']],
            },
            collapsed: {
                root: [ClassName['with-header-collapsed']],
            }
        },
    },
} satisfies AppMainUI;

export default appMainUI;
