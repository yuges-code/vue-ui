import type { AppHeaderUI } from "./AppHeaderUI";
import type { Props } from "../../../../types/Props";

export interface AppHeaderProps extends Props {
    ui?: AppHeaderUI,
    collapsed?: boolean,
};
