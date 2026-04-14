export const ButtonSize = {
    '4xs': '4xs',
    '3xs': '3xs',
    '2xs': '2xs',
    XSmall: 'xs',
    Small: 'sm',
    Medium: 'md',
    Large: 'lg',
    XLarge: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl',
} as const;

export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];
