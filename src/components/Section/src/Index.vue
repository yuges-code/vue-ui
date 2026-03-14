<script setup lang="ts">
    import { computed } from 'vue';
    import sectionUI from '../../../ui/section';
    import type { SectionUI } from './types/SectionUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { SectionProps } from './types/SectionProps';
    import type { SectionEmits } from './types/SectionEmits';

    defineOptions({
        name: 'YSection',
    });

    const props = withDefaults(defineProps<SectionProps>(), {
        as: 'section',
        ui: () => sectionUI,
    });
    const emits = defineEmits<SectionEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(sectionUI, props.ui, { arrays: { unique: true, concat: false } }) as SectionUI,
    }));
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || []),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
