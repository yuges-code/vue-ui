import type { ButtonSize } from "./ButtonSize";
import type { ButtonRounded } from "./ButtonRounded";
import type { ClassName } from "../../../../types/ClassName";
import type { ButtonOrientation } from "./ButtonOrientation";
import type { BooleanAsString } from "../../../../types/BooleanAsString";
import type {
    UINodes,
    UISlots,
    UIVariants,
    UINodesClear,
    UISlotsClear,
    UICombinations,
} from "../../../../utils/ui/src/types/UIOptions";

interface Nodes extends UINodes {
    root?: ClassName[],
    icon?: {
        append?: ClassName[],
        prepend?: ClassName[],
    },
};

interface Slots extends UISlots {};

interface Variants<T extends UINodes, U extends UISlots> extends UIVariants<T, U> {
    size?: { [key in ButtonSize]?: { nodes?: UINodesClear<T>, slots?: UISlotsClear<U>} },
    rounded?: { [key in ButtonRounded]?: { nodes?: UINodesClear<T>, slots?: UISlotsClear<U> } },
    square?: { [key in BooleanAsString]?: { nodes?: UINodesClear<T>, slots?: UISlotsClear<U> } },
    disabled?: { [key in BooleanAsString]?: { nodes?: UINodesClear<T>, slots?: UISlotsClear<U> } },
    orientation?: { [key in ButtonOrientation]?: { nodes?: UINodesClear<T>, slots?: UISlotsClear<U> } },
}; 

export interface ButtonUI {
    nodes?: Nodes,
    slots?: Slots,
    variants?: Variants<Nodes, Slots>,
    combinations?: UICombinations<Nodes, Slots, Variants<Nodes, Slots>>
};
