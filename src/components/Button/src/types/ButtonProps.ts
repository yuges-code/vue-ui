import type { ButtonUI } from "./ButtonUI";
import type { Props } from "../../../../types/Props";

export interface ButtonProps extends Props {
    ui?: ButtonUI,
    disabled?: boolean,
};
