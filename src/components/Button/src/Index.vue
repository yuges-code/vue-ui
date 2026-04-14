<script setup lang="ts">
    import { YIcon } from '../../Icon';
    import { classes } from './classes';
    import { computed } from 'vue';
    import buttonUI from '../../../ui/button';
    import type { ButtonUI } from './types/ButtonUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { ButtonProps } from './types/ButtonProps';
    import type { ButtonEmits } from './types/ButtonEmits';
    import type { ButtonSlots } from './types/ButtonSlots';

    const props = withDefaults(defineProps<ButtonProps>(), {
        as: 'button',
        size: 'md',
        rounded: 'md',
        square: false,
        type: 'button',
        disabled: false,
        ui: () => buttonUI,
        orientation: 'horizontal',
    });
    const emits = defineEmits<ButtonEmits>();
    const slots = defineSlots<ButtonSlots>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(buttonUI, props.ui, { arrays: { unique: true, concat: false } }) as ButtonUI,
    }));
</script>

<template>
    <component
        :is="as"
        :type="type"
        :class="classes(config, props, slots)"
        @click="(e: PointerEvent) => emits('click', e)"
        :disabled = disabled
    >
        <YIcon
            v-if="
                (typeof icon === 'string' ) ||
                (typeof icon === 'object' && icon.prepend)
            "
            :class="[
                ...(config.ui.variants?.size?.[size]?.icon?.prepend || [])
            ]"
            :name="typeof icon === 'string' ? icon : icon.prepend"
        />
        <div v-if="slots.default">
            <slot></slot>
        </div>
        <YIcon
            v-if="typeof icon === 'object' && icon.append"
            :name="icon.append"
            :class="[
                ...(config.ui.variants?.size?.[size]?.icon?.append || [])
            ]"
        />
    </component>
</template>
