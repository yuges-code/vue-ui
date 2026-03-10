import {
    computed,
    reactive,
    type ComponentPublicInstance,
    type ComponentInternalInstance,
} from "vue";
import { YAppHeader } from "../../../components";

const store = reactive({
    asides: [] as any[],
    headers: [] as any[],
});

const header = computed(() =>
    store.headers.slice(-1).pop()?.proxy as ComponentPublicInstance<typeof YAppHeader> | null
);

export function useApp()
{
    function setHeader(header?: ComponentInternalInstance | null)
    {
        if (header && header?.type.name === YAppHeader.name) {
            store.headers.push(header);
        }
    }

    function deleteHeader(header?: ComponentInternalInstance | null)
    {
        if (header && header?.type.name === YAppHeader.name) {
            store.headers = store.headers.filter(item => item.uid !== header.uid);
        }
    }

    function reset()
    {
        store.asides = [];
        store.headers = [];
    }

    return {
        store,
        header,
        setHeader,
        deleteHeader,

        reset,
    };
}