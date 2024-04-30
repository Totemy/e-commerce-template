<template>
  <main>
    <Catalog />
    <ImportCategory/>
  </main>
</template>
<script>
import Catalog from '../components/Home/CatalogComponent.vue'
import ImportCategory from '@/components/Admin/ImportCategory.vue'
export default {
  components: {
    Catalog,
    ImportCategory
  }
}

</script>