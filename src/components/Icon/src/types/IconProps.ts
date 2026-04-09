import type { IconUI } from "./IconUI";
import type { Props } from "../../../../types/Props";
import type { IconProps as IconPropsBase } from '@yuges/vue-icons';

export interface IconProps extends Props, IconPropsBase {
    ui?: IconUI,
};
