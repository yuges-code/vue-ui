<script setup lang="ts">
    import { computed } from 'vue';
    import { YList } from '../../List';
    import listUI from '../../../ui/list';
    import { YButton } from '../../Button';
    import { YSeparator } from '../../Separator';
    import navigationUI from '../../../ui/navigation';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { NavigationUI } from './types/NavigationUI';
    import type { NavigationItem } from './types/NavigationItem';
    import type { NavigationEmits } from './types/NavigationEmits';
    import type { NavigationProps } from './types/NavigationProps';
    import type { ListItems } from '../../List/src/types/ListItems';
    import { ButtonOrientation } from '../../Button/src/types/ButtonOrientation';

    defineOptions({
        name: 'YNavigation',
    });

    const props = withDefaults(defineProps<NavigationProps>(), {
        as: 'nav',
        ui: () => navigationUI,
        items: () => [],
        collapsed: false,
        orientation: 'horizontal',
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

    function prepare(items: NavigationItem[])
    {
        let data = [] as ListItems;

        items.forEach((value) => {
            data.push({
                ...value,
                ...{
                    component:
                    {
                        as: YButton,
                        bind: {
                            icon: value.icon,
                            orientation: props.collapsed ? ButtonOrientation.Vertical : ButtonOrientation.Horizontal,
                        }
                    }
                },
            });
        });

        return data
    }
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || []),
            ...(config.ui.variants?.orientation?.[orientation]?.root || [])
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <template v-if="group" v-for="list, index in items">
            <YSeparator
                v-if="index"
                class="w-full"
                :orientation="orientation"
            ></YSeparator>
            <YList
                :ui="{
                    nodes: {
                        root: [ ...listUI.nodes.root, 'gap-2' ],
                    },
                }"
                class="w-full"
                marker="none"
                :items="prepare(list)"
                v-if="Array.isArray(list)"
            ></YList>
        </template>
        <template v-else>
            <YList
                class="w-full"
                marker="none"
                :items="(items as NavigationItem[])"
                v-if="Array.isArray(items)"
            ></YList>
        </template>
    </component>
</template>
