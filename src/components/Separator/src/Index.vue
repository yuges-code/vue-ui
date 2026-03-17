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
        ui: () => separatorUI,
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
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <hr
            :class="[
                ...(config.ui.nodes?.border || [])
            ]"
        >
        <template v-if="$slots.default">
            <div
                :class="[
                ...(config.ui.slots?.default || []),
                ]"
            >
                <slot></slot>
            </div>
            <hr
                :class="[
                    ...(config.ui.nodes?.border || [])
                ]"
            >
        </template>
    </component>
</template>
