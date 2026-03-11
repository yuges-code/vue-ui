import {
    computed,
    reactive,
    type ComponentPublicInstance,
    type ComponentInternalInstance,
} from "vue";
import { YAppAside, YAppHeader } from "../../../components";

const store = reactive({
    asides: [] as any[],
    headers: [] as any[],
});

const header = computed(() =>
    store.headers.slice(-1).pop()?.proxy as ComponentPublicInstance<typeof YAppHeader> | null
);

const aside = computed(() => ({
    left: store.asides
        .filter((aside) => aside?.proxy?.$props?.location === 'left')
        .slice(-1).pop()?.proxy as ComponentPublicInstance<typeof YAppAside> | null,
    right: store.asides
        .filter((aside) => aside?.proxy?.$props?.location === 'right')
        .slice(-1).pop()?.proxy as ComponentPublicInstance<typeof YAppAside> | null,
}));

export function useApp()
{
    function set(
        type: 'asides' | 'headers',
        instance?: ComponentInternalInstance | null,
        component?: typeof YAppAside | typeof YAppHeader,
    ) {
        if (!instance || instance?.type.name != component?.name) {
            return;
        }

        if (store[type].find(item => item.uid === instance?.uid)) {
            return;
        }

        store[type].push(instance);
    }

    function remove(
        type: 'asides' | 'headers',
        instance?: ComponentInternalInstance | null,
        component?: typeof YAppAside | typeof YAppHeader,
    ) {
        if (!instance || instance?.type.name != component?.name) {
            return;
        }

        store[type] = store[type].filter(item => item.uid != instance.uid);
    }

    function setAside(aside?: ComponentInternalInstance | null)
    {
        set('asides', aside, YAppAside);
    }

    function removeAside(aside?: ComponentInternalInstance | null)
    {
        remove('asides', aside, YAppAside);
    }

    function setHeader(header?: ComponentInternalInstance | null)
    {
        set('headers', header, YAppHeader);
    }

    function removeHeader(header?: ComponentInternalInstance | null)
    {
        remove('headers', header, YAppHeader);
    }

    function reset()
    {
        store.asides = [];
        store.headers = [];
    }

    return {
        store,
        aside,
        header,
        setAside,
        removeAside,
        setHeader,
        removeHeader,

        reset,
    };
}
