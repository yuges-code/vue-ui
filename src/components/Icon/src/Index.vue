<script setup lang="ts">
    import { computed } from 'vue';
    import iconUI from '../../../ui/icon';
    import { YIcon } from '@yuges/vue-icons';
    import type { IconUI } from './types/IconUI';
    import type { IconEmits } from './types/IconEmits';
    import type { IconProps } from './types/IconProps';
    import { mergeDeepWithOptions } from '../../../utils';

    defineOptions({
        name: 'YIcon',
    });

    const props = withDefaults(defineProps<IconProps>(), {
        as: 'svg',
        name: 'seal',
        ui: () => iconUI,
    });
    const emits = defineEmits<IconEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(iconUI, props.ui, { arrays: { unique: true, concat: false } }) as IconUI,
    }));
</script>

<template>
    <YIcon
        :name="name"
        :type="type"
        :fill="fill"
        :color="color"
        :xmlns="xmlns"
        :delay="delay"
        :width="width"
        :height="height"
        :timeout="timeout"
        :view-box="viewBox"
        :suspensible="suspensible"
        :stroke-width="strokeWidth"
        :error-component="errorComponent"
        :loading-component="loadingComponent"

        :class="[
            ...(config.ui.nodes?.root || [])
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </YIcon>
</template>
