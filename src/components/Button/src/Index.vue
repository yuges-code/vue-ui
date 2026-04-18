<script setup lang="ts">
    import { YIcon } from '../../Icon';
    import { computed } from 'vue';
    import buttonUI from '../../../ui/button';
    import type { ButtonUI } from './types/ButtonUI';
    import { mergeDeepWithOptions, ui } from '../../../utils';
    import type { ButtonProps } from './types/ButtonProps';
    import type { ButtonEmits } from './types/ButtonEmits';
    import type { ButtonSlots } from './types/ButtonSlots';

    const props = withDefaults(defineProps<ButtonProps>(), {
        as: 'button',
        size: 'md',
        rounded: 'md',
        type: 'button',
        disabled: false,
        square: undefined,
        ui: () => buttonUI,
        orientation: 'horizontal',
    });
    const emits = defineEmits<ButtonEmits>();
    const slots = defineSlots<ButtonSlots>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(buttonUI, props.ui, { arrays: { unique: true, concat: false } }) as ButtonUI,
    }));

    function isSquare(props: ButtonProps, slots: ButtonSlots): boolean
    {
        if (props.square === undefined) {
            return slots && !slots.default &&
                (
                    typeof props.icon === 'string' ||
                    typeof props.icon === 'object' && !!props.icon.prepend && !props.icon.append ||
                    typeof props.icon === 'object' && !!props.icon.append && !props.icon.prepend
                );
        } else {
            return Boolean(props.square);
        }
    }

    const yv = ui(
        config.value.ui.nodes,
        config.value.ui.slots,
        config.value.ui.variants,
        config.value.ui.combinations,
    );
</script>

<template>
    <component
        :is="as"
        :type="type"
        :class="yv.nodes?.root?.( {size: size, square: isSquare(props, slots) ? 'true' : 'false', rounded: rounded, orientation: orientation} )"
        @click="(e: PointerEvent) => emits('click', e)"
        :disabled = disabled
    >
        <YIcon
            v-if="
                (typeof icon === 'string' ) ||
                (typeof icon === 'object' && icon.prepend)
            "
            :class="yv.nodes?.icon?.prepend?.( {size: size} )"
            :name="typeof icon === 'string' ? icon : icon.prepend"
        />
        <div v-if="slots.default">
            <slot></slot>
        </div>
        <YIcon
            v-if="typeof icon === 'object' && icon.append"
            :name="icon.append"
            :class="yv.nodes?.icon?.append?.( {size: size} )"
        />
    </component>
</template>
