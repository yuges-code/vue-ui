import type { AppAsideUI } from "../types/AppAsideUI";
import type { AsideLocation } from "../types/AppAsideProps";

export function classes(config: {ui: AppAsideUI}, location: AsideLocation, collapsed: boolean)
{
    return [
        ...(config.ui.nodes?.root || []),
        ...(config.ui.variants?.location?.[location]?.root || []),
        ...(config.ui.variants?.collapsed?.[collapsed ? 'true' : 'false']?.location?.[location]?.root || []),
    ];
}
