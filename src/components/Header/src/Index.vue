<script setup lang="ts">
    import { computed } from 'vue';
    import headerUI from '../../../ui/header';
    import type { HeaderUI } from './types/HeaderUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { HeaderProps } from './types/HeaderProps';
    import type { HeaderEmits } from './types/HeaderEmits';

    defineOptions({
        name: 'YHeader',
    });

    const props = withDefaults(defineProps<HeaderProps>(), {
        as: 'header',
        ui: () => headerUI,
        collapsed: false,
    });
    const emits = defineEmits<HeaderEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(headerUI, props.ui, { arrays: { unique: true, concat: false } }) as HeaderUI,
    }));
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || []),
            ...(
                config.ui.variants?.collapsed
                    ? config.ui.variants?.collapsed[collapsed ? 'true' : 'false']?.root || []
                    : []
            ),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <div v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>

        <div v-if="$slots.default" class="w-full">
            <slot name="default"></slot>
        </div>

        <div v-if="$slots.append">
            <slot name="append"></slot>
        </div>
    </component>
</template>
