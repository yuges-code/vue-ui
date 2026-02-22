<script setup lang="ts">
    import { ref } from 'vue';
    import classes from '../../../ui/button';

    const props = withDefaults(defineProps<{
        ui?: typeof classes,
        disabled?: boolean,
    }>(), {
        ui: () => classes,
    });

    const config = ref({
        ui: props.ui,
    });
</script>

<template>
    <button :class="config.ui.nodes.root">
        <slot></slot>
    </button>
</template>
