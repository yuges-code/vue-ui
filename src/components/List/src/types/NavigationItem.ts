import type { NavigationItems } from "./NavigationItems";

export interface NavigationItem {
    to?: string,
    text?: string,
    icon?: string,
    type?: 'label' | 'button' | 'link',
    description?: string,
    children?: NavigationItems,
};
