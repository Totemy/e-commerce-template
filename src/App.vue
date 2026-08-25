<script setup>

import { RouterView } from 'vue-router'
import TopBarComponent from '@/components/Navigation/TopBarComponent.vue'
import NavComponent from '@/components/Navigation/NavComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

</script>

<template>

  <TopBarComponent/>
  <NavComponent/>
  <RouterView />
  <FooterComponent/>
</template>

<style lang="scss">
@import "@/styles/app.scss";
</style>
