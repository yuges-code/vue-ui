<script setup lang="ts">
    import YList from './Index.vue';
    import { computed } from 'vue';
    import listUI from '../../../ui/list';
    import { YListItem } from '../../ListItem';
    import type { ListUI } from './types/ListUI';
    import type { ListProps } from './types/ListProps';
    import type { ListEmits } from './types/ListEmits';
    import { mergeDeepWithOptions } from '../../../utils';

    defineOptions({
        name: 'YList',
    });

    const props = withDefaults(defineProps<ListProps>(), {
        child: false,
        items: () => [],
        ui: () => listUI,
        type: 'unordered',
        indentation: true,
    });
    const emits = defineEmits<ListEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(listUI, props.ui, { arrays: { unique: true, concat: false } }) as ListUI,
    }));

    const as = computed(() => {
        if (props.as) {
            return props.as;
        }

        return props.type === 'ordered' ? 'ol' : 'ul';
    });

    const marker = computed(() => {
        if (props.marker) {
            return props.marker;
        }

        return props.type === 'ordered' ? 'decimal' : 'disc';
    });
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(!child
                    ? config.ui.nodes?.root || []
                    : config.ui.nodes?.child?.root || []
                ),
            ...(config.ui.variants?.marker?.[marker]?.root || []),
            ...(!child
                    ? config.ui.variants?.indentation?.[indentation ? 'true' : 'false']?.root || []
                    : config.ui.variants?.indentation?.[indentation ? 'true' : 'false']?.child?.root || []
                ),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <YListItem
            :as="'li'"
            :child="child"
            v-for="item in items"
        >
            <component
                :is="item.component?.as"
                v-if="item.component?.as"
                v-bind="item.component?.bind"
            >
                {{ item.text }}
            </component>
            <template v-else>
                {{ item.text }}
            </template>

            <YList
                :as="as"
                :ui="ui"
                :type="type"
                :child="true"
                :marker="marker"
                :items="item.items"
                :indentation="indentation"
                v-if="item.items && Array.isArray(item.items) && item.items.length"
            ></YList>
        </YListItem>

        <slot></slot>
    </component>
</template>
