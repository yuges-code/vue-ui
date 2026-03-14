<script setup lang="ts">
    import { computed } from 'vue';
    import navigationUI from '../../../ui/navigation';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { NavigationUI } from './types/NavigationUI';
    import type { NavigationEmits } from './types/NavigationEmits';
    import type { NavigationProps } from './types/NavigationProps';

    defineOptions({
        name: 'YNavigation',
    });

    const props = withDefaults(defineProps<NavigationProps>(), {
        as: 'nav',
        ui: () => navigationUI,
        items: () => [],
    });
    const emits = defineEmits<NavigationEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(navigationUI, props.ui, { arrays: { unique: true, concat: false } }) as NavigationUI,
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
        <template v-for="list in items">
            <ul v-if="Array.isArray(list)" class="list-none m-0 p-0">
                <template v-for="item in list">
                    <li v-if="! Array.isArray(item)">{{ item.text }}</li>
                </template>
            </ul>
        </template>
        <!-- <YList></YList> -->
    </component>
</template>
