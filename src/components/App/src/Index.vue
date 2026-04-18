<script setup lang="ts">
    import { variants } from './variants';
    import { appUI } from '../../../ui/app';
    import type { AppUI } from './types/AppUI';
    import type { AppProps } from './types/AppProps';
    import type { AppSlots } from './types/AppSlots';
    import type { AppEmits } from './types/AppEmits';
    import { computed, getCurrentInstance } from 'vue';
    import { mergeDeepWithOptions, ui } from '../../../utils';
    // import { useTheme } from '../../../composables/theme';

    const instance = getCurrentInstance();

    defineOptions({
        name: 'YApp',
    });

    const router = instance?.proxy?.$router;

    if (router) {

    }

    // const theme = useTheme();

    const props = withDefaults(defineProps<AppProps>(), {
        as: 'div',
        ui: () => appUI,
        mode: 'fullscreen',
    });
    const emits = defineEmits<AppEmits>();
    const slots = defineSlots<AppSlots>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(appUI, props.ui, { arrays: { unique: true, concat: false } }) as AppUI,
    }));

    const yv = ui(
        config.value.ui.nodes,
        config.value.ui.slots,
        config.value.ui.variants,
        config.value.ui.combinations,
    );
</script>

<template>
    <component
        :is="as"
        @click="(e: PointerEvent) => emits('click', e)"
        :class="yv.nodes?.root?.( variants(props, slots) )"
    >
        <slot></slot>
    </component>
</template>
