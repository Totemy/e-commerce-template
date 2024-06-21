<script setup>

import { RouterView } from 'vue-router'
import NavComponent from '@/components/Navigation/NavComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

</script>

<template>

  <NavComponent/>
  <RouterView />
  <FooterComponent/>
</template>

<style lang="scss">
@import "@/styles/app.scss";
</style>