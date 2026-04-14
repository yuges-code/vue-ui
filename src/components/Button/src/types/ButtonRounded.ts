export const ButtonRounded = {
    XSmall: 'xs',
    Small: 'sm',
    Medium: 'md',
    Large: 'lg',
    XLarge: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl',
} as const;

export type ButtonRounded = typeof ButtonRounded[keyof typeof ButtonRounded];
