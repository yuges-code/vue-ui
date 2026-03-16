import type { ListUI } from "./ListUI";
import type { ListItems } from "./ListItems";
import type { Props } from "../../../../types/Props";

export type ListType = 'ordered' | 'unordered';
export type ListMarkerType = 'disc' | 'decimal' | 'none';

export interface ListProps extends Props {
    ui?: ListUI,
    type?: ListType,
    items?: ListItems,
    indentation?: boolean,
    marker?: ListMarkerType,
};
