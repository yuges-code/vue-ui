import { ClassName } from "../types/ClassName";
import type { ListUI } from "../components/List/src/types/ListUI";

const listUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['flex-column']],
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
                root: [ClassName['pl-0']],
                child: {
                    root: [ClassName['pl-6']],
                },
            },
            false: {
                root: [ClassName['pl-0']],
                child: {
                    root: [ClassName['p-0']],
                },
            },
        },
    },
} satisfies ListUI;

export default listUI;
