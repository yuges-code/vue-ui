import type { ButtonUI } from "../../../components/Button/src/types/ButtonUI";

export const variants = {
    disabled: {
        true: {
            nodes: {
                root: ['disabled'],
            },
        },
        false: {
            nodes: {
                root: [],
            },
        }
    },
    orientation: {
        vertical: {
            nodes: {
                root: ['flex-column', 'align-items-center'],
            },
        },
        horizontal: {
            nodes: {
                root: ['flex-row'],
            },
        },
    },
    square: {
        true: {
            nodes: {
                root: ['btn-icon'],
            },
        },
        false: {
            nodes: {
                root: [],
            },
        },
    },
    rounded: {
        md: {
            nodes: {
                root: ['rounded-md'],
                icon: {},
            },
        },
    },
    size: {
        '4xs': {
            nodes: {
                root: ['text-5xs', 'px-1.25', 'py-0.5'],
                icon: { append: ['size-3'], prepend: ['size-3'] },
            },
        },
        '3xs': {
            nodes: {
                root: ['text-4xs', 'px-1.5', 'py-0.75'],
                icon: { append: ['size-3.5'], prepend: ['size-3.5'] },
            },
        },
        '2xs': {
            nodes: {
                root: ['text-3xs', 'px-1.75', 'py-1'],
                icon: { append: ['size-4'], prepend: ['size-4'] },
            },
        },
        xs: {
            nodes: {
                root: ['text-2xs', 'px-2', 'py-1.25'],
                icon: { append: ['size-4.5'], prepend: ['size-4.5'] },
            },
        },
        sm: {
            nodes: {
                root: ['text-xs', 'px-2.25', 'py-1.5'],
                icon: { append: ['size-5'], prepend: ['size-5'] },
            },
        },
        md: {
            nodes: {
                root: ['text-sm', 'px-2.5', 'py-1.75'],
                icon: { append: ['size-5.5'], prepend: ['size-5.5'] },
            },
        },
        lg: {
            nodes: {
                root: ['text-md', 'px-2.75', 'py-2'],
                icon: { append: ['size-6'], prepend: ['size-6'] },
            },
        },
        xl: {
            nodes: {
                root: ['text-lg', 'px-3', 'py-2.25'],
                icon: { append: ['size-6.5'], prepend: ['size-6.5'] },
            },
        },
        '2xl': {
            nodes: {
                root: ['text-xl', 'px-3.25', 'py-2.5'],
                icon: { append: ['size-7'], prepend: ['size-7'] },
            },
        },
        '3xl': {
            nodes: {
                root: ['text-2xl', 'px-3.5', 'py-2.75'],
                icon: { append: ['size-7.5'], prepend: ['size-7.5'] },
            },
        },
        '4xl': {
            nodes: {
                root: ['text-3xl', 'px-3.75', 'py-3'],
                icon: { append: ['size-8'], prepend: ['size-8'] },
            },
        },
    },
} satisfies ButtonUI['variants'];
