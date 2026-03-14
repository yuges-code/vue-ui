import type { SectionUI } from "./SectionUI";
import type { Props } from "../../../../types/Props";

export interface SectionProps extends Props {
    ui?: SectionUI,
    disabled?: boolean,
};
