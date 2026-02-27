export const ClassName = {
    '': '',
    'btn': 'btn',
    'disabled': 'disabled',
    'position-relative': 'position-relative',
} as const;

export type ClassName = typeof ClassName[keyof typeof ClassName];
