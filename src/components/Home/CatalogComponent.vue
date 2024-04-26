<template>
<section>
  <h2>Products</h2>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.name }} 2 </li>
  </ul>
  <h2>Categories</h2>
  <ul>
    <li v-for="category in categories" :key="category.id">{{ category.name }} 3</li>
  </ul>
</section>
</template>
<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    const categories = computed(() => store.state.categories);

    return {
      products,
      categories
    };
  }
}
</script>