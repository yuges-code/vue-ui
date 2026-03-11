import type { AppAsideUI } from "./AppAsideUI";
import type { Props } from "../../../../types/Props";

export const AsideLocation = {
    'left': 'left',
    'right': 'right',
} as const;

export type AsideLocation = typeof AsideLocation[keyof typeof AsideLocation];

export interface AsideWidth {
    default?: CSSStyleDeclaration['width'],
    collapsed?: CSSStyleDeclaration['width'],
}

export interface AppAsideProps extends Props {
    ui?: AppAsideUI,
    width?: AsideWidth,
    collapsed?: boolean,
    location?: AsideLocation,
};
