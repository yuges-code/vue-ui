import { ClassName } from "../types/ClassName";
import type { ButtonUI } from "../components/Button/src/types/ButtonUI";

const buttonUI = {
    nodes: {
        root: [ClassName['btn'], ClassName["position-relative"]],
    },
    variants: {
        disabled: {
            true: {
                root: [ClassName['disabled']],
            },
            false: {
                root: [],
            }
        },
    },
} satisfies ButtonUI;

export default buttonUI;
