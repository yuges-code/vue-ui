import type { ComponentPublicInstance } from "vue";
import type { YAppAside } from "../../../AppAside";
import type { YAppHeader } from "../../../AppHeader";
import { AsideLocation } from "../../../AppAside/src/types/AppAsideProps";

export function styles(
    header: ComponentPublicInstance<typeof YAppHeader> | null,
    aside: {
        left: ComponentPublicInstance<typeof YAppAside> | null,
        right: ComponentPublicInstance<typeof YAppAside> | null,
    },
) {
    const style = {} as Record<string, string | undefined>;

    style['--y-header-height'] = header?.$props?.height?.default;
    style['--y-header-collapsed-height'] = header?.$props?.height?.collapsed;

    Object.values(AsideLocation).forEach(location => {
        style[`--y-aside-${location}-width`] = aside[location]?.$props?.width?.default;
        style[`--y-aside-${location}-collapsed-width`] = aside[location]?.$props?.width?.collapsed;
    });

    return style;
}
