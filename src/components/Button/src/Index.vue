<script setup lang="ts">
    import { computed} from 'vue';
    import buttonUI from '../../../ui/button';
    import type { ButtonUI } from './types/ButtonUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { ButtonProps } from './types/ButtonProps';
    import type { ButtonEmits } from './types/ButtonEmits';

    const props = withDefaults(defineProps<ButtonProps>(), {
        as: 'button',
        ui: () => buttonUI,
        disabled: false,
    });
    const emits = defineEmits<ButtonEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(buttonUI, props.ui, { arrays: { unique: true, concat: false } }) as ButtonUI,
    }));
</script>

<template>
    <component
        :is="props.as"
        :class="[
            ...config.ui.nodes?.root,
            ...(disabled ? config.ui.variants?.disabled?.true?.root : config.ui.variants?.disabled?.false?.root),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
        :disabled = disabled
    >
        <slot></slot>
    </component>
</template>
