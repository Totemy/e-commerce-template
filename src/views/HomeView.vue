<template>
  <main>
    <ImportCategory/>
    <ImportProduct/>
    <Catalog />

  </main>
</template>
<script>
import Catalog from '../components/Home/CatalogComponent.vue'
import ImportCategory from '@/components/Admin/ImportCategory.vue'
import ImportProduct from '@/components/Admin/ImportProduct.vue'
export default {
  components: {
    ImportProduct,
    Catalog,
    ImportCategory
  }
}

</script>