<script setup lang="ts">
    defineOptions({
        name: 'IconList',
    });

    withDefaults(defineProps<{strokeWidth?: number}>(), {
        strokeWidth: 3
    });
</script>

<template>
    <svg :stroke-width="strokeWidth" width="48" height="48" viewBox="0 0 48 48" fill="none" color="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 11H40" stroke="currentColor" stroke-linecap="round"/>
        <path d="M8 24H40" stroke="currentColor" stroke-linecap="round"/>
        <path d="M8 37H40" stroke="currentColor" stroke-linecap="round"/>
    </svg>
</template>
