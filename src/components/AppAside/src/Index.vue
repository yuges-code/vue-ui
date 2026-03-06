<script setup lang="ts">
    import { computed } from 'vue';
    import appAsideUI from '../../../ui/appAside';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppAsideUI } from './types/AppAsideUI';
    import type { AppAsideProps } from './types/AppAsideProps';
    import type { AppAsideEmits} from './types/AppAsideEmits';

    defineOptions({
        name: 'YAppAside',
    });

    const props = withDefaults(defineProps<AppAsideProps>(), {
        as: 'aside',
        ui: () => appAsideUI,
        collapsed: false,
    });
    const emits = defineEmits<AppAsideEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appAsideUI, props.ui, { arrays: { unique: true, concat: false } }) as AppAsideUI,
    }));
</script>

<template>
    <component
        :is="as"
        :class="[
            ...config.ui.nodes?.root,
            ...(collapsed ? config.ui.variants?.collapsed?.true?.root : config.ui.variants?.collapsed?.false?.root),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
