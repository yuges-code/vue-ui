<script setup lang="ts">
    import { styles } from './styles';
    import { classes } from './classes';
    import { YSection } from '../../Section';
    import appAsideUI from '../../../ui/appAside';
    import { useApp } from '../../../composables/app';
    import type { AppAsideUI } from './types/AppAsideUI';
    import { mergeDeepWithOptions } from '../../../utils';
    import type { AppAsideEmits} from './types/AppAsideEmits';
    import type { AppAsideProps } from './types/AppAsideProps';
    import { computed, getCurrentInstance, onUnmounted } from 'vue';

    defineOptions({
        name: 'YAppAside',
    });

    const app = useApp();

    const props = withDefaults(defineProps<AppAsideProps>(), {
        as: 'aside',
        ui: () => appAsideUI,
        width: () => ({
            default: '240px',
            collapsed: '72px',
        }),
        location: 'left',
        collapsed: false,
    });
    const emits = defineEmits<AppAsideEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appAsideUI, props.ui, { arrays: { unique: true, concat: false } }) as AppAsideUI,
    }));

    app.setAside(getCurrentInstance());

    onUnmounted(() => {
        app.removeAside(getCurrentInstance());
    });
</script>

<template>
    <component
        :is="as"
        :style="styles(width, location)"
        :class="classes(config, location, collapsed)"
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
