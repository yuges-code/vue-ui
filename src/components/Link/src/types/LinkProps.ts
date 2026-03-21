import type { LinkUI } from "./LinkUI";
import type { Props } from "../../../../types/Props";
import type { RouteLocationRaw } from "vue-router";

export interface LinkProps extends Props {
    ui?: LinkUI,
    disabled?: boolean,
    external?: boolean;
    activeClass?: string,
    exactActiveClass?: string,
    to?: RouteLocationRaw,
    href?: LinkProps['to'];
    target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null;
    rel?: 'noopener' | 'noreferrer' | 'nofollow' | 'sponsored' | 'ugc' | (string & {}) | null;
};
