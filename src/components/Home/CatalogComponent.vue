<template>
<section>
  <div>
    Catalog
  </div>
</section>
</template>
<script>
import { DataService, EventBus } from '@/services/DataJsonService.js'

export default {
  data() {
    return {
      localData: []
    }
  },
  created() {
    this.localData = DataService.data.products;
    EventBus.$on('data-updated', (newData) => {
      this.localData = newData.products;
    });
  },
  computed: {
    categories() {
      return DataService.data.categories;
    },
  }
}
</script>