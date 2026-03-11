import type { AsideLocation, AsideWidth } from "../types/AppAsideProps";

export function styles(width: AsideWidth, location: AsideLocation)
{
    const style = {} as Record<string, string | undefined>;

    style[`--y-aside-${location}-width`] = width.default;
    style[`--y-aside-${location}-collapsed-width`] = width.collapsed;

    return style;
}
