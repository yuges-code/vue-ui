import { nodes } from "./src/nodes";
import { slots } from "./src/slots";
import { variants } from "./src/variants";
import { combinations } from "./src/combinations";
import type { ButtonUI } from "../../components/Button/src/types/ButtonUI";

export const buttonUI = {
    nodes: nodes,
    slots: slots,
    variants: variants,
    combinations: combinations,
} satisfies ButtonUI;
