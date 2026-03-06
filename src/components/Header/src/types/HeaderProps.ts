import type { HeaderUI } from "./HeaderUI";
import type { Props } from "../../../../types/Props";

export interface HeaderProps extends Props {
    ui?: HeaderUI,
    collapsed?: boolean,
};
