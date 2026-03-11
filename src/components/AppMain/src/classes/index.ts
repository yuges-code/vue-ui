import type { ComponentPublicInstance } from "vue";
import type { YAppAside } from "../../../AppAside";
import type { AppMainUI } from "../types/AppMainUI";
import type { YAppHeader } from "../../../AppHeader";


export function classes(
    config: {ui: AppMainUI},
    header: ComponentPublicInstance<typeof YAppHeader> | null,
    aside: {
        left: ComponentPublicInstance<typeof YAppAside> | null,
        right: ComponentPublicInstance<typeof YAppAside> | null,
    },
) {
    return [
        ...(config.ui.nodes?.root || []),
        ...(header ? config.ui.variants?.header?.default?.root || [] : []),
        ...(header?.$props?.collapsed ? config.ui.variants?.header?.collapsed?.root || [] : []),
        ...(aside.left ? config.ui.variants?.aside?.default?.location?.left?.root || [] : []),
        ...(aside.left?.$props?.collapsed ? config.ui.variants?.aside?.collapsed?.location?.left?.root || [] : []),
        ...(aside.right ? config.ui.variants?.aside?.default?.location?.right?.root || [] : []),
        ...(aside.right?.$props?.collapsed ? config.ui.variants?.aside?.collapsed?.location?.right?.root || [] : []),
    ];
}
