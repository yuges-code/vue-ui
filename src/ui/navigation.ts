import { ClassName } from "../types/ClassName";
import type { NavigationUI } from "../components/Navigation/src/types/NavigationUI";

const navigationUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['align-items-center'],
        ],
        separator: [],
    },
    variants: {
        orientation: {
            vertical: {
                root: [ClassName['flex-row'], ClassName['justify-content-center']],
                separator: [],
            },
            horizontal: {
                root: [ClassName['flex-column']],
                separator: [],
            },
        }
    },
} satisfies NavigationUI;

export default navigationUI;
