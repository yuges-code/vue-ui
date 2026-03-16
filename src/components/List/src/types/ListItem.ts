import type { ListItems } from "./ListItems";

export interface ListItem {
    bind?: object,
    text?: string,
    items?: ListItems,
};
