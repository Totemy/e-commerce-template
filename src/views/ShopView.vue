<template>
  <main>
    <div class="container">
      <BannerComponent/>
      <div class="shop">
        <FilterCategoryComponent/>
        <ShopCatalogComponent v-reveal/>
      </div>
    </div>
    <NewsletterView v-reveal/>
  </main>
</template>
<script setup>

import BannerComponent from '@/components/Shop/BannerComponent.vue'
import ShopCatalogComponent from '@/components/Shop/ShopCatalogComponent.vue'
import FilterCategoryComponent from '@/components/Shop/FilterCategoryComponent.vue'
import NewsletterView from '@/components/Home/NewsletterView.vue'
</script>
