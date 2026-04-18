import type { AppProps } from "../types/AppProps";
import type { AppSlots } from "../types/AppSlots";

export function variants(
    props: AppProps,
    slots: AppSlots,
) {
    if (slots) {

    }

    return {
        mode: props.mode,
    };
}
