import headerUI from "./header";
import { ClassName } from "../types/ClassName";
import type { AppHeaderUI } from "../components/AppHeader/src/types/AppHeaderUI";

const appHeaderUI = {
    nodes: {
        root: [
            ...headerUI.nodes.root,
            ...[
                ClassName['position-fixed'],
                ClassName['top-0'],
                ClassName['start-0'],
            ],
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
} satisfies AppHeaderUI;

export default appHeaderUI;
