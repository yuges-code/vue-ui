export const ThemeName = {
    dark:'dark',
    light: 'light',
    system: 'system',
} as const;

export type ThemeName = typeof ThemeName[keyof typeof ThemeName];
