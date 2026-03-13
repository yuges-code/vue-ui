<script setup lang="ts">
    import { computed } from 'vue';
    import iconUI from '../../../ui/icon';
    import type { IconUI } from './types/IconUI';
    import type { IconEmits } from './types/IconEmits';
    import type { IconProps } from './types/IconProps';
    import { mergeDeepWithOptions } from '../../../utils';
    
    import * as icons from '../../../icons';

    defineOptions({
        name: 'YIcon',
    });

    const props = withDefaults(defineProps<IconProps>(), {
        as: '',
        name: 'menu',
        ui: () => iconUI,
    });
    const emits = defineEmits<IconEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(iconUI, props.ui, { arrays: { unique: true, concat: false } }) as IconUI,
    }));

    function capitalize(string: string) {
        return string[0]?.toUpperCase() + string.slice(1);
    }

    const icon = computed(() => `Icon${capitalize(props.name)}` as keyof typeof icons);

</script>

<template>
    <component
        :is="icons?.[icon]"
        :class="[
            ...(config.ui.nodes?.root || [])
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    ></component>
</template>
