import type { NavigationUI } from "./NavigationUI";
import type { Props } from "../../../../types/Props";
import type { NavigationItems } from "./NavigationItems";

export type NavigationOrientation = 'horizontal' | 'vertical';

export interface NavigationProps extends Props {
    ui?: NavigationUI,
    items?: NavigationItems,
    orientation?: NavigationOrientation,
};
