import { nodes } from "./src/nodes";
import { slots } from "./src/slots";
import { variants } from "./src/variants";
import { combinations } from "./src/combinations";
import type { AppUI } from "../../components/App/src/types/AppUI";

export const appUI = {
    nodes: nodes,
    slots: slots,
    variants: variants,
    combinations: combinations,
} satisfies AppUI;
