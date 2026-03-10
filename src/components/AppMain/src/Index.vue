<script setup lang="ts">
    import { computed } from 'vue';
    import appMainUI from '../../../ui/appMain';
    import { useApp } from '../../../composables/app';
    import type { AppMainUI } from './types/AppMainUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppMainEmits} from './types/AppMainEmits';
    import type { AppMainProps } from './types/AppMainProps';

    defineOptions({
        name: 'YAppMain',
    });

    const app = useApp();
    const header = app.header;

    const props = withDefaults(defineProps<AppMainProps>(), {
        as: 'main',
        ui: () => appMainUI,
    });
    const emits = defineEmits<AppMainEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appMainUI, props.ui, { arrays: { unique: true, concat: false } }) as AppMainUI,
    }));
</script>

<template>
    <component
        :is="as"
        @click="(e: PointerEvent) => emits('click', e)"
        :class="[
            ...config.ui.nodes?.root,
            ...(header ? config.ui.variants?.header?.default?.root : []),
            ...(header?.$props?.collapsed ? config.ui.variants?.header?.collapsed?.root : []),
        ]"
        :style="{
            '--y-header-height': header?.$props?.height?.default,
            '--y-header-collapsed-height': header?.$props?.height?.collapsed,
        }"
    >
        <section :class="config.ui.nodes?.section">
            <slot></slot>
        </section>
    </component>
</template>
