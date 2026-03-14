import { ClassName } from "../types/ClassName";
import type { NavigationUI } from "../components/Navigation/src/types/NavigationUI";

const navigationUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['justify-content-center'], ClassName['align-items-center']],
    },
} satisfies NavigationUI;

export default navigationUI;
