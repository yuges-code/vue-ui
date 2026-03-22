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
        orientation: {
            vertical: {
                root: [ClassName['flex-column']],
            },
            horizontal: {
                root: [ClassName['flex-row']],
            },
        },
        square: {
            true: {
                root: [ClassName['btn-icon']],
            },
            false: {
                root: [],
            },
        }
    },
} satisfies ButtonUI;

export default buttonUI;
