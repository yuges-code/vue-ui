<script setup lang="ts">
    import appUI from '../../../ui/app';
    import type { AppUI } from './types/AppUI';
    import type { AppProps } from './types/AppProps';
    import type { AppEmits } from './types/AppEmits';
    import { computed, getCurrentInstance } from 'vue';
    import { mergeDeepWithOptions } from '../../../utils';
    // import { useTheme } from '../../../composables/theme';

    const instance = getCurrentInstance();

    defineOptions({
        name: 'YApp',
    });

    const router = instance?.proxy?.$router;

    if (router) {

    }

    // const theme = useTheme();

    const props = withDefaults(defineProps<AppProps>(), {
        as: 'div',
        ui: () => appUI,
        mode: 'fullscreen',
    });
    const emits = defineEmits<AppEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appUI, props.ui, { arrays: { unique: true, concat: false } }) as AppUI,
    }));
</script>

<template>
    <component
        :is="props.as"
        :class="[
            ...config.ui.nodes?.root,
            ...(config.ui.variants?.mode ? config.ui.variants.mode[mode]?.root : []),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
