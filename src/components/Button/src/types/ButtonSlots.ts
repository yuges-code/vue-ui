import type { VNode } from "vue";

export interface ButtonSlots {
    default?: (props?: { ui?: any }) => VNode[],
}
