import type { ClassName } from "../../../../types/ClassName";
import type { ButtonOrientation } from "./ButtonOrientation";
import type { ButtonRounded } from "./ButtonRounded";
import type { ButtonSize } from "./ButtonSize";

interface Nodes {
    root?: ClassName[],
    icon?: {
        append?: ClassName[],
        prepend?: ClassName[],
    },
};

type BooleanAsString = 'true' | 'false';

export interface ButtonUI {
    nodes?: Nodes,
    variants?: {
        size?: { [key in ButtonSize]?: Nodes & { square?: { [key in BooleanAsString]?: Nodes } } },
        rounded?: { [key in ButtonRounded]?: Nodes },
        square?: { [key in BooleanAsString]?: Nodes },
        disabled?: { [key in BooleanAsString]?: Nodes },
        orientation?: { [key in ButtonOrientation]?: Nodes },
    },
};
