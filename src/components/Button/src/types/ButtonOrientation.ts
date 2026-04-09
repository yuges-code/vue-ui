export const ButtonOrientation = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
} as const;

export type ButtonOrientation = typeof ButtonOrientation[keyof typeof ButtonOrientation];
