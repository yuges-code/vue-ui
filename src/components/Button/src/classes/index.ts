import type { ButtonUI } from "../types/ButtonUI";
import type { ButtonOrientation } from "../types/ButtonProps";

export function classes(
    config: {ui: ButtonUI},
    disabled: boolean,
    orientation: ButtonOrientation,
    square: boolean,
) {
    return [
        ...(config.ui.nodes?.root || []),
        ...(config.ui.variants?.orientation?.[orientation]?.root || []),
        ...(config.ui.variants?.square?.[square ? 'true' : 'false']?.root || []),
        ...(config.ui.variants?.disabled?.[disabled ? 'true' : 'false']?.root || []),
    ];
}
