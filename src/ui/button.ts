import { ClassName } from "../types/ClassName";
import type { ButtonUI } from "../components/Button/src/types/ButtonUI";

const buttonUI = {
    nodes: {
        root: ['d-inline-flex', 'position-relative', 'gap-1'],
        icon: {
            append: [ClassName["d-inline-flex"]],
            prepend: [ClassName["d-inline-flex"]],
        }
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
                root: [ClassName['flex-column'], ClassName['align-items-center']],
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
        },
        rounded: {
            md: {
                root: [ClassName['rounded-md']],
            },
        },
        size: {
            '4xs': {
                root: ['text-5xs', 'px-1.25', 'py-0.5'],
                icon: { append: ['size-3'], prepend: ['size-3'] },
            },
            '3xs': {
                root: ['text-4xs', 'px-1.5', 'py-0.75'],
                icon: { append: ['size-3.5'], prepend: ['size-3.5'] },
            },
            '2xs': {
                root: ['text-3xs', 'px-1.75', 'py-1'],
                icon: { append: ['size-4'], prepend: ['size-4'] },
            },
            xs: {
                root: ['text-2xs', 'px-2', 'py-1.25'],
                icon: { append: ['size-4.5'], prepend: ['size-4.5'] },
            },
            sm: {
                root: ['text-xs', 'px-2.25', 'py-1.5'],
                icon: { append: ['size-5'], prepend: ['size-5'] },
            },
            md: {
                root: ['text-sm', 'px-2.5', 'py-1.75'],
                icon: { append: ['size-5.5'], prepend: ['size-5.5'] },
            },
            lg: {
                root: ['text-md', 'px-2.75', 'py-2'],
                icon: { append: ['size-6'], prepend: ['size-6'] },
            },
            xl: {
                root: ['text-lg', 'px-3', 'py-2.25'],
                icon: { append: ['size-6.5'], prepend: ['size-6.5'] },
            },
            '2xl': {
                root: ['text-xl', 'px-3.25', 'py-2.5'],
                icon: { append: ['size-7'], prepend: ['size-7'] },
            },
            '3xl': {
                root: ['text-2xl', 'px-3.5', 'py-2.75'],
                icon: { append: ['size-7.5'], prepend: ['size-7.5'] },
            },
            '4xl': {
                root: ['text-3xl', 'px-3.75', 'py-3'],
                icon: { append: ['size-8'], prepend: ['size-8'] },
                square: { true: { root: ['p-3'] }, false: { root: ['px-3.75', 'py-3'] } },
            },
        },
    },
    // combinations: [
    //     {
    //         variants: { size: 'md', square: 'true' },
    //         nodes: { root: [''] }
    //     },
    // ],
} satisfies ButtonUI;

export default buttonUI;
