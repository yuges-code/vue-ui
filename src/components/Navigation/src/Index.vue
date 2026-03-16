<script setup lang="ts">
    import { computed } from 'vue';
    import { YList } from '../../List';
    import navigationUI from '../../../ui/navigation';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { NavigationUI } from './types/NavigationUI';
    import type { NavigationItem } from './types/NavigationItem';
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

    const group = computed(() => 
        props.items &&
        Array.isArray(props.items) &&
        props.items[0] &&
        Array.isArray(props.items[0])
    );
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || []),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <template v-if="group" v-for="list in items">
            <YList
                class="m-0"
                marker="none"
                :items="list"
                v-if="Array.isArray(list)"
            ></YList>
        </template>
        <template v-else>
            <YList
                class="m-0"
                marker="none"
                :items="(items as NavigationItem[])"
                v-if="Array.isArray(items)"
            ></YList>
        </template>
    </component>
</template>
