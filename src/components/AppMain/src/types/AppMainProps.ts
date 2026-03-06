import type { AppMainUI } from "./AppMainUI";
import type { Props } from "../../../../types/Props";

export interface AppMainProps extends Props {
    ui?: AppMainUI,
    collapsed?: boolean,
};
