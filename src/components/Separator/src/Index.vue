<script setup lang="ts">
    import { computed } from 'vue';
    import separatorUI from '../../../ui/separator';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { SeparatorUI } from './types/SeparatorUI';
    import type { SeparatorProps } from './types/SeparatorProps';
    import type { SeparatorEmits } from './types/SeparatorEmits';

    defineOptions({
        name: 'YSeparator',
    });

    const props = withDefaults(defineProps<SeparatorProps>(), {
        as: 'div',
        type: 'solid',
        ui: () => separatorUI,
        orientation: 'horizontal',
    });
    const emits = defineEmits<SeparatorEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(separatorUI, props.ui, { arrays: { unique: true, concat: false } }) as SeparatorUI,
    }));
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || []),
            ...(config.ui.variants?.orientation?.[orientation]?.root || [])
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <hr
            :class="[
                ...(config.ui.nodes?.border || []),
                ...(config.ui.variants?.type?.[type]?.border || []),
                ...(config.ui.variants?.orientation?.[orientation]?.border || []),
            ]"
        >
        <template v-if="$slots.default">
            <div
                :class="[
                    ...(config.ui.slots?.default || []),
                    ...(config.ui.variants?.orientation?.[orientation]?.default || []),
                ]"
            >
                <slot></slot>
            </div>
            <hr
                :class="[
                    ...(config.ui.nodes?.border || []),
                    ...(config.ui.variants?.type?.[type]?.border || []),
                    ...(config.ui.variants?.orientation?.[orientation]?.border || []),
                ]"
            >
        </template>
    </component>
</template>
