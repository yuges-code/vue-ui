import { ClassName } from "../types/ClassName";
import type { SeparatorUI } from "../components/Separator/src/types/SeparatorUI";

const separatorUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['align-items-center']],
        border: [
            ClassName['d-flex'], ClassName['border-gray'],
        ],
    },
    slots: {
        default: [ClassName['d-flex']],
    },
    variants: {
        type: {
            solid: {
                border: [ClassName['border-solid']],
            },
            dotted: {
                border: [ClassName['border-dotted']],
            },
            dashed: {
                border: [ClassName['border-dashed']],
            },
            double: {
                border: [ClassName['border-double']],
            },
        },
        orientation: {
            vertical: {
                root: [ClassName['flex-column']],
                border: [
                    ClassName['h-full'],
                    ClassName['border-l-1'],
                ],
                default: [ClassName['my-3']],
            },
            horizontal: {
                root: [ClassName['flex-row']],
                border: [
                    ClassName['w-full'],
                    ClassName['border-t-1'],
                ],
                default: [ClassName['mx-3']],
            },
        },
    },
} satisfies SeparatorUI;

export default separatorUI;
