import type { ButtonUI } from "./ButtonUI";
import type { ButtonType } from "./ButtonType";
import type { ButtonSize } from "./ButtonSize";
import type { RouteLocationRaw } from "vue-router";
import type { ButtonRounded } from "./ButtonRounded";
import type { Props } from "../../../../types/Props";
import type { ButtonOrientation } from "./ButtonOrientation";
import type { IconProps } from "../../../Icon/src/types/IconProps";

export interface ButtonProps extends Props {
    ui?: ButtonUI,
    square?: boolean,
    type?: ButtonType,
    disabled?: boolean,
    size?: ButtonSize,
    rounded?: ButtonRounded,
    to?: RouteLocationRaw,
    icon?: {
        append?: IconProps['name'],
        prepend?: IconProps['name'],
    } | IconProps['name'],
    orientation?: ButtonOrientation,
};
