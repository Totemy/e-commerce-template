<script setup>

import { RouterView } from 'vue-router'
import NavComponent from '@/components/Navigation/NavComponent.vue'

</script>

<template>

  <NavComponent/>
  <RouterView />
</template>

<style lang="scss">
@import "@/styles/app.scss";
</style>