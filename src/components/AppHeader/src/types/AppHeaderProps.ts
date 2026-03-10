import type { AppHeaderUI } from "./AppHeaderUI";
import type { Props } from "../../../../types/Props";

export interface HeaderHeight {
    default?: CSSStyleDeclaration['height'],
    collapsed?: CSSStyleDeclaration['height'],
}

export interface AppHeaderProps extends Props {
    ui?: AppHeaderUI,
    collapsed?: boolean,
    height?: HeaderHeight,
};
