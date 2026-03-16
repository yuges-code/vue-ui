import { ClassName } from "../types/ClassName";
import type { NavigationUI } from "../components/Navigation/src/types/NavigationUI";

const navigationUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-column'],
            ClassName['align-items-center'],
            ClassName['justify-content-center'],
        ],
    },
} satisfies NavigationUI;

export default navigationUI;
