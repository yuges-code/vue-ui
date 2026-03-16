<script setup lang="ts">
    import YList from './Index.vue';
    import { computed } from 'vue';
    import listUI from '../../../ui/list';
    import type { ListUI } from './types/ListUI';
    import type { ListProps } from './types/ListProps';
    import type { ListEmits } from './types/ListEmits';
    import { mergeDeepWithOptions } from '../../../utils';

    defineOptions({
        name: 'YList',
    });

    const props = withDefaults(defineProps<ListProps>(), {
        ui: () => listUI,
        items: () => [],
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
            ...(config.ui.nodes?.root || []),
            ...(
                config.ui.variants?.indentation
                    ? config.ui.variants.indentation[indentation ? 'true' : 'false']?.root || []
                    : []
            ),
            ...(
                config.ui.variants?.marker
                    ? config.ui.variants.marker[marker]?.root || []
                    : []
            ),
        ]"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <li v-for="item in items">
            {{ item.text }}
            <YList
                :as="as"
                :ui="ui"
                :type="type"
                :marker="marker"
                :items="item.items"
                :indentation="indentation"
                v-if="item.items && Array.isArray(item.items) && item.items.length"
            ></YList>
        </li>
    </component>
</template>
