import { ClassName } from "../types/ClassName";
import type { SectionUI } from "../components/Section/src/types/SectionUI";

const sectionUI = {
    nodes: {
        root: [ClassName['d-flex'], ClassName['flex-column'], ClassName['min-size-full'], ClassName['p-6']],
    },
} satisfies SectionUI;

export default sectionUI;
