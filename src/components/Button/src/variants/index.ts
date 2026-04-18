import type { ButtonProps } from "../types/ButtonProps";
import type { ButtonSlots } from "../types/ButtonSlots";
import type { BooleanAsString } from "../../../../types/BooleanAsString";

function isSquare(props: ButtonProps, slots: ButtonSlots): boolean
{
    if (props.square === undefined) {
        return slots && !slots.default &&
            (
                typeof props.icon === 'string' ||
                typeof props.icon === 'object' && !!props.icon.prepend && !props.icon.append ||
                typeof props.icon === 'object' && !!props.icon.append && !props.icon.prepend
            );
    } else {
        return Boolean(props.square);
    }
}

export function variants(
    props: ButtonProps,
    slots: ButtonSlots,
) {
    return {
        size: props.size,
        rounded: props.rounded,
        orientation: props.orientation,
        square: isSquare(props, slots) ? 'true' : 'false' as BooleanAsString,
    };
}
