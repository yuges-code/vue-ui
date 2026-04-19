import type { ButtonUI } from "../../../components/Button/src/types/ButtonUI";

export const nodes = {
    root: [
        'd-inline-flex',
        'cursor-pointer',
        'position-relative',
        'gap-1',
        'before:inset-0',
        'before:opacity-0',
        'before:bg-current',
        'before:transition',
        'before:rounded-inherit',
        'hover:before:opacity-10',
        'before:position-absolute',
    ],
    icon: {
        append: ['d-inline-flex'],
        prepend: ['d-inline-flex'],
    },
} satisfies ButtonUI['nodes'];
