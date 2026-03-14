<script setup lang="ts">
    import { computed } from 'vue';
    import { styles } from './styles';
    import { classes } from './classes';
    import { YSection } from '../../Section';
    import appMainUI from '../../../ui/appMain';
    import { useApp } from '../../../composables/app';
    import type { AppMainUI } from './types/AppMainUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppMainEmits } from './types/AppMainEmits';
    import type { AppMainProps } from './types/AppMainProps';

    defineOptions({
        name: 'YAppMain',
    });

    const app = useApp();

    const aside = app.aside;
    const header = app.header;

    const props = withDefaults(defineProps<AppMainProps>(), {
        as: 'main',
        ui: () => appMainUI,
    });
    const emits = defineEmits<AppMainEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appMainUI, props.ui, { arrays: { unique: true, concat: false } }) as AppMainUI,
    }));
</script>

<template>
    <component
        :is="as"
        :style="styles(header, aside)"
        :class="classes(config, header, aside)"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <YSection
            :ui="{
                nodes: {
                    root: config.ui.nodes?.section,
                }
            }"
        >
            <slot></slot>
        </YSection>
    </component>
</template>
