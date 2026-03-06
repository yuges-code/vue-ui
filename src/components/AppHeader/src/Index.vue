<script setup lang="ts">
    import { computed } from 'vue';
    import { YHeader } from '../../Header';
    import appHeaderUI from '../../../ui/appHeader';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppHeaderUI } from './types/AppHeaderUI';
    import type { AppHeaderProps } from './types/AppHeaderProps';
    import type { AppHeaderEmits } from './types/AppHeaderEmits';

    defineOptions({
        name: 'YAppHeader',
    });

    const props = withDefaults(defineProps<AppHeaderProps>(), {
        as: YHeader,
        ui: () => appHeaderUI,
        collapsed: false,
    });
    const emits = defineEmits<AppHeaderEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appHeaderUI, props.ui, { arrays: { unique: true, concat: false } }) as AppHeaderUI,
    }));
</script>

<template>
    <component
        :is="as"
        :ui="config.ui"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
