import type { ButtonUI } from "../components/Button/src/types/ButtonUI";

export default {
    nodes: {
        root: ['btn', 'position-relative'],
    },
    variants: {
        disabled: {
            true: {
                root: ['disabled'],
            },
            false: {
                root: [''],
            }
        },
    },
} satisfies ButtonUI;
