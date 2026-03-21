<script setup lang="ts">
    import linkUI from '../../../ui/link';
    import type { LinkUI } from './types/LinkUI';
    import type { LinkProps } from './types/LinkProps';
    import type { LinkEmits } from './types/LinkEmits';
    import { computed, getCurrentInstance } from 'vue';
    import { mergeDeepWithOptions } from '../../../utils';

    const instance = getCurrentInstance();

    defineOptions({
        name: 'YLink',
    });

    const router = instance?.proxy?.$router;

    const props = withDefaults(defineProps<LinkProps>(), {
        as: 'a',
        disabled: false,
        ui: () => linkUI,
        external: undefined,
    });
    const emits = defineEmits<LinkEmits>();

    const config = computed(() => ({
        ui: mergeDeepWithOptions(linkUI, props.ui, { arrays: { unique: true, concat: false } }) as LinkUI,
    }));

    const to = computed(() => {
        return props.to || props.href;
    });

    const external = computed(() => {
        if (props.external != undefined) {
            return props.external;
        }

        if (! router) {
            return true;
        }

        if (! to.value) {
            return true;
        }

        if (typeof to.value === 'string') {
            return (
                !to.value.startsWith('/') &&
                !to.value.startsWith('./') &&
                (
                    to.value.startsWith('//') ||
                    to.value.match(/^[a-zA-Z]+:/)
                )
            );
        }

        return false;
    });

    const as = computed(() => {
        return external.value ? 'a' : 'RouterLink';
    });

    const bind = computed(() => {
        return external.value
            ? {
                href:
                    (typeof props.href === 'string' ? props.href : undefined) ||
                    (typeof props.to === 'string' ? props.to : undefined),
                target: props.target,
                rel: props.rel || (props.target === '_blank' ? 'noopener noreferrer' : undefined),
            } : {
                to: to.value,
                activeClass: props.activeClass,
                exactActiveClass: props.exactActiveClass,
                ...(props.target ? { target: props.target } : {}),
                ...(props.rel ? { rel: props.rel } : {}),
                isActive: false,
                isExactActive: false,
            }
    });
</script>

<template>
    <component
        :is="as"
        :class="[
            ...(config.ui.nodes?.root || []),
        ]"
        v-bind="bind"
        @click="(e: PointerEvent) => emits('click', e)"
    >
        <slot></slot>
    </component>
</template>
