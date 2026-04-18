export const AppMode = {
    Window: 'window',
    Fullscreen: 'fullscreen',
} as const;

export type AppMode = typeof AppMode[keyof typeof AppMode];
