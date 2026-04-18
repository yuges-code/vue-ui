import type { VNode } from "vue";

export interface AppSlots {
    default?: (props?: { ui?: any }) => VNode[],
}
