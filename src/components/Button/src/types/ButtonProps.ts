import type { ButtonUI } from "./ButtonUI";
import type { RouteLocationRaw } from "vue-router";
import type { Props } from "../../../../types/Props";

export type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonOrientation = 'horizontal' | 'vertical';

export interface ButtonProps extends Props {
    ui?: ButtonUI,
    square?: boolean,
    type?: ButtonType,
    disabled?: boolean,
    to?: RouteLocationRaw,
    icon?: {
        append?: string,
        prepend?: string,
    } | string,
    orientation?: ButtonOrientation,
};
