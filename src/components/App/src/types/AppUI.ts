import type { AppMode } from "./AppMode";
import type { ClassName } from "../../../../types/ClassName";
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
};

interface Slots extends UISlots {};

interface Variants<T extends UINodes, U extends UISlots> extends UIVariants<T, U> {
    mode?: { [key in AppMode]?: { nodes?: UINodesClear<T>, slots?: UISlotsClear<U>} },
};

export interface AppUI {
    nodes?: Nodes,
    slots?: Slots,
    variants?: Variants<Nodes, Slots>,
    combinations?: UICombinations<Nodes, Slots, Variants<Nodes, Slots>>
};
