export default {
    nodes: {
        root: ['btn', 'position-relative'],
    },
    variants: {
        disabled: {
            true: {
                root: 'disabled',
            },
            false: {
                root: '',
            },
        },
    },
};
