import type { ButtonUI } from "../../../components/Button/src/types/ButtonUI";

export const nodes = {
    root: ['d-inline-flex', 'position-relative', 'gap-1'],
    icon: {
        append: ['d-inline-flex'],
        prepend: ['d-inline-flex'],
    },
} satisfies ButtonUI['nodes'];
