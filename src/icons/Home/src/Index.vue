<script setup lang="ts">
    defineOptions({
        name: 'IconHome',
    });

    withDefaults(defineProps<{strokeWidth?: number}>(), {
        strokeWidth: 3
    });
</script>

<template>
    <svg :stroke-width="strokeWidth" width="48" height="48" viewBox="0 0 48 48" fill="none" color="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 34H30" stroke="currentColor" stroke-linecap="round"/>
        <path d="M34 40H14C10.6863 40 8 37.3137 8 34V19.7082C8 17.4356 9.28401 15.358 11.3167 14.3416L21.3167 9.34164C23.0059 8.49706 24.9941 8.49706 26.6833 9.34164L36.6833 14.3416C38.716 15.358 40 17.4356 40 19.7082V34C40 37.3137 37.3137 40 34 40Z" stroke="currentColor" stroke-linejoin="round"/>
    </svg>
</template>
