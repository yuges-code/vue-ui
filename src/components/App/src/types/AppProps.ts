import type { AppUI } from "./AppUI";
import type { Props } from "../../../../types/Props";

export interface AppProps extends Props {
    ui?: AppUI,
    mode?: 'window' | 'fullscreen',
};
