<template>
    <router-view />
</template>

<style lang="scss">
  @use 'vuetify' as *;
  @use './styles/main.scss';
</style>

<!-- <script setup>  //CREO ya todo esta bien
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const LayoutComponent = computed(() => route.meta.layout || null)
</script>
-->