import { ClassName } from "../types/ClassName";
import type { ListItemUI } from "../components/ListItem/src/types/ListItemUI";

const listItemUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['flex-column']],
    },
} satisfies ListItemUI;

export default listItemUI;
