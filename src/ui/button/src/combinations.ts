import type { ButtonUI } from "../../../components/Button/src/types/ButtonUI";

export const combinations = [
    { variants: { size: '4xs', square: 'true' }, nodes: { root: ['p-0.5'] } }, 
    { variants: { size: '3xs', square: 'true' }, nodes: { root: ['p-0.75'] } }, 
    { variants: { size: '2xs', square: 'true' }, nodes: { root: ['p-1'] } }, 
    { variants: { size: 'xs', square: 'true' }, nodes: { root: ['p-1.25'] } }, 
    { variants: { size: 'xs', square: 'true' }, nodes: { root: ['p-1.25'] } }, 
    { variants: { size: 'sm', square: 'true' }, nodes: { root: ['p-1.5'] } }, 
    { variants: { size: 'md', square: 'true' }, nodes: { root: ['p-1.75'] } }, 
    { variants: { size: 'lg', square: 'true' }, nodes: { root: ['p-2'] } }, 
    { variants: { size: 'xl', square: 'true' }, nodes: { root: ['p-2.25'] } }, 
    { variants: { size: '2xl', square: 'true' }, nodes: { root: ['p-2.5'] } }, 
    { variants: { size: '3xl', square: 'true' }, nodes: { root: ['p-2.75'] } }, 
    { variants: { size: '4xl', square: 'true' }, nodes: { root: ['p-3'] } },
] satisfies ButtonUI['combinations'];
