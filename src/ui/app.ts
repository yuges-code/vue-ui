import { ClassName } from "../types/ClassName";
import type { AppUI } from "../components/App/src/types/AppUI";

const appUI = {
    nodes: {
        root: [
            ClassName['d-flex'],
            ClassName['flex-column'],
            ClassName["position-relative"],
            ClassName["bg-default"],
            ClassName["text-default"],
        ],
    },
    variants: {
        mode: {
            window: {
                root: [ClassName['min-size-full']],
            },
            fullscreen: {
                root: [ClassName['min-h-100vh'], ClassName['min-w-full']],
            }
        },
    },
} satisfies AppUI;

export default appUI;
