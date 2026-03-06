import { ClassName } from "../types/ClassName";
import type { HeaderUI } from "../components/Header/src/types/HeaderUI";

const headerUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['align-items-center'],
            ClassName['justify-content-between'],
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
} satisfies HeaderUI;

export default headerUI;
