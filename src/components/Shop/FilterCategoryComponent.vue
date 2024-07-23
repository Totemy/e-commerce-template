<template>
  <aside>
    <h2>Filter</h2>
    <div>
      <ul>
        <h3>Categories</h3>
        <div v-for="category in categories" :key="category.id">
          <div>
            {{ category.name }}
          </div>
        </div>
      </ul>
    </div>
    <div>
      <h3>Prices</h3>
      <PriceFilterComponent/>
    </div>


  </aside>
</template>
<script setup>
import {useCategoriesStore} from '@/store/modules/categories.js'
import { computed, onMounted } from 'vue'
import PriceFilterComponent from '@/components/Shop/PriceFilterComponent.vue'

const store = useCategoriesStore();

onMounted(()=>{
  store.fetchCategories();
})
const categories = computed(()=> store.allCategories)

</script>