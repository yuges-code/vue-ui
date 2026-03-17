import { ClassName } from "../types/ClassName";
import type { SeparatorUI } from "../components/Separator/src/types/SeparatorUI";

const separatorUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['align-items-center']],
        border: [
            ClassName['d-flex'],
            ClassName['w-full'],
            ClassName['border-t-1'],
            ClassName['border-r-0'],
            ClassName['border-b-0'],
            ClassName['border-l-0'],
            ClassName['m-0'],
        ],
    },
    slots: {
        default: [ClassName['mx-3']],
    }
} satisfies SeparatorUI;

export default separatorUI;
