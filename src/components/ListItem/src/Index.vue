<script setup lang="ts">
    import { computed } from 'vue';
    import listItemUI from '../../../ui/listItem';
    import type { ListItemUI } from './types/ListItemUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { ListItemProps } from './types/ListItemProps';
    import type { ListItemEmits } from './types/ListItemEmits';

    defineOptions({
        name: 'YListItem',
    });

    const props = withDefaults(defineProps<ListItemProps>(), {
        as: 'li',
        child: false,
        indentation: true,
        ui: () => listItemUI,
    });
    const emits = defineEmits<ListItemEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(listItemUI, props.ui, { arrays: { unique: true, concat: false } }) as ListItemUI,
    }));
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || [])
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
