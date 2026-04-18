import type { AppUI } from "../../../components/App/src/types/AppUI";

export const variants = {
    mode: {
        window: {
            nodes: {
                root: ['min-size-full'],
            },
        },
        fullscreen: {
            nodes: {
                root: ['min-h-100vh', 'min-w-full'],
            },
        },
    },
} satisfies AppUI['variants'];
