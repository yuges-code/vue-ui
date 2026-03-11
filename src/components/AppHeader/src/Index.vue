<script setup lang="ts">
    import { YHeader } from '../../Header';
    import appHeaderUI from '../../../ui/appHeader';
    import { useApp } from '../../../composables/app';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppHeaderUI } from './types/AppHeaderUI';
    import type { AppHeaderProps } from './types/AppHeaderProps';
    import type { AppHeaderEmits } from './types/AppHeaderEmits';
    import { computed, getCurrentInstance, onUnmounted } from 'vue';

    defineOptions({
        name: 'YAppHeader',
    });

    const app = useApp();

    const props = withDefaults(defineProps<AppHeaderProps>(), {
        as: YHeader,
        ui: () => appHeaderUI,
        height: () => ({
            default: '56px',
            collapsed: '56px',
        }),
        collapsed: false,
    });
    const emits = defineEmits<AppHeaderEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appHeaderUI, props.ui, { arrays: { unique: true, concat: false } }) as AppHeaderUI,
    }));

    app.setHeader(getCurrentInstance());

    onUnmounted(() => {
        app.removeHeader(getCurrentInstance());
    });
</script>

<template>
    <component
        :is="as"
        :ui="config.ui"
        @click="(e: PointerEvent) => emits('click', e)"
        :style="{
            '--y-header-height': height.default,
            '--y-header-collapsed-height':height.collapsed,
        }"
    >
        <slot></slot>
    </component>
</template>
