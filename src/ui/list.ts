import listItemUI from "./listItem";
import { ClassName } from "../types/ClassName";
import type { ListUI } from "../components/List/src/types/ListUI";

const listUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['flex-column']],
        item: [...listItemUI.nodes.root]
    },
    variants: {
        marker: {
            disc: {
                root: [ClassName['list-disc']],
            },
            decimal: {
                root: [ClassName['list-decimal']],
            },
            none: {
                root: [ClassName['list-none']],
            },
        },
        indentation: {
            true: {
                root: [],
                child: {
                    root: [ClassName['pl-6']],
                },
            },
            false: {
                root: [],
                child: {
                    root: [],
                },
            },
        },
    },
} satisfies ListUI;

export default listUI;
