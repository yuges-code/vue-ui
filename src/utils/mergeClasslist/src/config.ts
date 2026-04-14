const validator = {
    isNumber: (value: string) => !!value && !Number.isNaN(Number(value)),
    isInteger: (value: string) => !!value && Number.isInteger(Number(value))
}

export default {
    breakpoints: [
        '2xs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
    ],
    groups: {
        row: ['row'],

        'text-size': [
            { text: ['md', 'lg'] },
        ],

        p: [{ p: validator.isNumber }],

        px: [{ px: validator.isNumber }],
        py: [{ py: validator.isNumber }],

        pt: [{ pt: validator.isNumber }],
        pr: [{ pr: validator.isNumber }],
        pb: [{ pb: validator.isNumber }],
        pl: [{ pl: validator.isNumber }],
    },
    conflicts: {
        p: ['px', 'py', 'pt', 'pr', 'pb', 'pl'],
        px: ['p', 'pr', 'pl'],
        py: ['p', 'pt', 'pb'],
    },
};
