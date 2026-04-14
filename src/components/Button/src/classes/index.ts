import type { ButtonUI } from "../types/ButtonUI";
import type { ButtonProps } from "../types/ButtonProps";
import type { ButtonSlots } from "../types/ButtonSlots";

// export function classes(
//     config: {ui: ButtonUI},
//     disabled: boolean,
//     orientation: ButtonOrientation,
//     square: boolean,
// ) {
//     return [
//         ...(config.ui.nodes?.root || []),
//         ...(config.ui.variants?.orientation?.[orientation]?.root || []),
//         ...(config.ui.variants?.square?.[square ? 'true' : 'false']?.root || []),
//         ...(config.ui.variants?.disabled?.[disabled ? 'true' : 'false']?.root || []),
//     ];
// }

function isSquare(props: ButtonProps, slots: ButtonSlots): boolean
{
    return props.square ||
    (
        slots &&
        ! slots.default &&
        (
            typeof props.icon === 'string' ||
            typeof props.icon === 'object' && !!props.icon.prepend && !props.icon.append ||
            typeof props.icon === 'object' && !!props.icon.append && !props.icon.prepend
        )
    )
}

export function classes(
    config: {ui: ButtonUI},
    props: ButtonProps,
    slots: ButtonSlots,
) {
    const square = isSquare(props, slots);

    return [
        ...(config.ui.nodes?.root || []),
        ...(config.ui.variants?.size?.[props.size!]?.root || []),
        ...(config.ui.variants?.rounded?.[props.rounded!]?.root || []),
        ...(config.ui.variants?.orientation?.[props.orientation!]?.root || []),
        ...(config.ui.variants?.square?.[square ? 'true' : 'false']?.root || []),
        ...(config.ui.variants?.disabled?.[props.disabled ? 'true' : 'false']?.root || []),
    ];
}
