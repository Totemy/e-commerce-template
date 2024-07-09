<template>
  <section>
    <div>
      <div > <!-- here aside component -->
        <FilterCategoryComponent/>
      </div>
      <BannerComponent/>
      <ShopCatalogComponent/>
    </div>
  </section>
</template>
<script setup>

import BannerComponent from '@/components/Shop/BannerComponent.vue'
import ShopCatalogComponent from '@/components/Shop/ShopCatalogComponent.vue'
import FilterCategoryComponent from '@/components/Shop/FilterCategoryComponent.vue'
</script>