<script setup lang="ts">
    import { computed } from 'vue';
    import { YIcon } from '../../Icon';
    import { variants } from './variants';
    import { buttonUI } from '../../../ui/button';
    import type { ButtonUI } from './types/ButtonUI';
    import type { ButtonProps } from './types/ButtonProps';
    import type { ButtonSlots } from './types/ButtonSlots';
    import type { ButtonEmits } from './types/ButtonEmits';
    import { mergeDeepWithOptions, ui } from '../../../utils';

    defineOptions({
        name: 'YButton',
    });

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
        :disabled = disabled
        @click="(e: PointerEvent) => emits('click', e)"
        :class="yv.nodes?.root?.( variants(props, slots) )"
    >
        <YIcon
            v-if="
                (typeof icon === 'string' ) ||
                (typeof icon === 'object' && icon.prepend)
            "
            :class="yv.nodes?.icon?.prepend?.( variants(props, slots) )"
            :name="typeof icon === 'string' ? icon : icon.prepend"
        />
        <div v-if="slots.default">
            <slot></slot>
        </div>
        <YIcon
            v-if="typeof icon === 'object' && icon.append"
            :name="icon.append"
            :class="yv.nodes?.icon?.append?.( variants(props, slots) )"
        />
    </component>
</template>
