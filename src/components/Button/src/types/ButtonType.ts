export const ButtonType = {
    Reset: 'reset',
    Submit: 'submit',
    Button: 'button',
} as const;

export type ButtonType = typeof ButtonType[keyof typeof ButtonType];
