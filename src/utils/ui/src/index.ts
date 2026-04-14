import { findDeep } from "../../find";
import type { ClassName } from "../../../types/ClassName";
import type { UINodes, UISlots, UIVariants, UICombinations } from "./types/UIOptions";
import { mergeClasslist } from "../../mergeClasslist";

type UINodeCollection<Nodes extends UINodes, Variants extends UIVariants> = {
    [key in keyof Nodes]:
        Nodes[key] extends UINodes
            ? UINodeCollection<Nodes[key], Variants>
            : (variants?: { [variant in keyof Variants]?: keyof Variants[variant] }) => ClassName[];
};

// type UISlotCollection<Slots extends UISlots, Variants extends UIVariants> = {
//     [key in keyof Slots]:
//         Slots[key] extends UISlots
//             ? UISlotCollection<Slots[key], Variants>
//             : (variants?: { [variant in keyof Variants]?: keyof Variants[variant] }) => ClassName[];
// };

function isUINodes(nodes: any): nodes is UINodes {
    return nodes && !Array.isArray(nodes) && typeof nodes === 'object';
}

function generateClasses(
    element: string,
    variants?: {},
    options?: {nodes?: UINodes, variants?: UIVariants, combinations?: UICombinations}
): ClassName[]
{
    variants;
    options;

    let classes = {
        element: findDeep(options?.nodes, (value, key) => Array.isArray(value) && key === element) as [] | undefined,
        variant: [] as [] | undefined,
    }

    if (! variants) {
        return classes.element || [];
    }

    for (const name of Object.keys(variants) as (keyof typeof variants)[]) {
        const variant =  variants[name];

        classes.variant = findDeep(
            options?.variants?.[name]?.[variant],
            (value, key) => Array.isArray(value) && key === element
        );
    }

    return mergeClasslist(
        classes.element || [] as ClassName[],
        classes.variant || [] as ClassName[],
    ) as ClassName[];
}

function createNodes<Nodes extends UINodes, Variants extends UIVariants<Nodes>>(nodes: Nodes, variants: Variants)
{
    let ui = {} as UINodeCollection<typeof nodes, typeof variants>;

    const options = {
        nodes: nodes,
        variants: variants,
    };

    const keys = Object.keys(nodes) as (keyof typeof nodes)[];

    keys.forEach(key => {
        ui[key] = isUINodes(nodes[key])
            ? createNodes(nodes[key], variants as any) as any
            : (variants?: { [variant in keyof Variants]?: keyof Variants[variant] }): ClassName[] => {
                return generateClasses(key as string, variants, options);
            };
    });

    return ui;
}

const ui = <
    Nodes extends UINodes,
    Slots extends UISlots,
    Variants extends UIVariants<Nodes, Slots>,
    Combinations extends UICombinations<Nodes, Slots, Variants>,
>(
    nodes: Nodes,
    slots: Slots,
    variants: Variants,
    combinations: Combinations,
): {
    nodes: UINodeCollection<Nodes, Variants>,
    // slots: UISlotCollection<Slots, Variants>,
} => {
    nodes;
    slots;
    variants;
    combinations;

    return {
        nodes: createNodes(nodes, variants),
        // slots: createNodes(nodes, variants),
    };
};

export { ui, createNodes };
