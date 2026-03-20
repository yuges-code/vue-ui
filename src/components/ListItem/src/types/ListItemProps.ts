import type { ListItemUI } from "./ListItemUI";
import type { Props } from "../../../../types/Props";

export type ListItemType = 'text' | 'button';

export interface ListItemProps extends Props {
    text?: string,
    child?: boolean,
    ui?: ListItemUI,
    type?: ListItemType,
    indentation?: boolean,
};
