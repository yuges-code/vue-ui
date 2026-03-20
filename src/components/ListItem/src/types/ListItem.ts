import type { Component } from "vue";
import type { ListItems } from "../../../List/src/types/ListItems";

export interface ListItem {
    as?: string | Component,
    bind?: object,
    text?: string,
    items?: ListItems,
    child?: {
        as?: string | Component,
        bind?: object,
    },
    component?: {
        as?: string | Component,
        bind?: object,
    },
};
