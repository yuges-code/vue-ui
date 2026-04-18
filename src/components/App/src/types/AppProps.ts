import type { AppUI } from "./AppUI";
import type { AppMode } from "./AppMode";
import type { Props } from "../../../../types/Props";

export interface AppProps extends Props {
    ui?: AppUI,
    mode?: AppMode,
};
