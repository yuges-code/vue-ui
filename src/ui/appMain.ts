import sectionUI from "./section";
import { ClassName } from "../types/ClassName";
import type { AppMainUI } from "../components/AppMain/src/types/AppMainUI";

const appMainUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-grow'],
            ClassName['min-size-full'],
        ],
        section: [
            ...sectionUI.nodes.root,
            ClassName['min-size-full']
        ],
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
        aside: {
            default: {
                location: {
                    left: {
                        root: [ClassName['with-aside-left']],
                    },
                    right: {
                        root: [ClassName['with-aside-right']],
                    },
                },
            },
            collapsed: {
                location: {
                    left: {
                        root: [ClassName['with-aside-left-collapsed']],
                    },
                    right: {
                        root: [ClassName['with-aside-right-collapsed']],
                    },
                },
            },
        },
    },
} satisfies AppMainUI;

export default appMainUI;
