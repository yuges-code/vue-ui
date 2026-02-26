<script setup lang="ts">
    import { computed} from 'vue';
    import buttonUI from '../../../ui/button';
    import type { ButtonProps } from './types/ButtonProps';
    import type { ButtonEmits } from './types/ButtonEmits';
    import { mergeDeepWithOptions } from '../../../utils/merge';

    const props = withDefaults(defineProps<ButtonProps>(), {
        as: 'button',
        ui: () => buttonUI,
        disabled: false,
    });
    const emits = defineEmits<ButtonEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(buttonUI, props.ui, { arrays: { unique: true, concat: false } }),
    }));
</script>

<template>
    <component
        :is="props.as"
        :class="config.ui.nodes?.root"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
