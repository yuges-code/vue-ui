import type { AppAsideUI } from "./AppAsideUI";
import type { Props } from "../../../../types/Props";

export interface AppAsideProps extends Props {
    ui?: AppAsideUI,
    collapsed?: boolean,
};
