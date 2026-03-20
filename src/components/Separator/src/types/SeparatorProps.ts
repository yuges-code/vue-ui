import type { SeparatorUI } from "./SeparatorUI";
import type { Props } from "../../../../types/Props";

export type SeparatorOrientation = 'horizontal' | 'vertical';
export type SeparatorType = 'solid' | 'dotted' | 'dashed' | 'double';

export interface SeparatorProps extends Props {
    ui?: SeparatorUI,
    type?: SeparatorType,
    orientation?: SeparatorOrientation,
};
