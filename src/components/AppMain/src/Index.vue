<script setup lang="ts">
    import { computed } from 'vue';
    import appMainUI from '../../../ui/appMain';
    import type { AppMainUI } from './types/AppMainUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppMainEmits} from './types/AppMainEmits';
    import type { AppMainProps } from './types/AppMainProps';

    defineOptions({
        name: 'YAppMain',
    });

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
        :class="[
            ...config.ui.nodes?.root,
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <section class="min-size-full">
            <slot></slot>
        </section>
    </component>
</template>
