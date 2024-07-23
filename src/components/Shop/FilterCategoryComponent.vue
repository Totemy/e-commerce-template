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
import { computed, onMounted, ref } from 'vue'
import PriceFilterComponent from '@/components/Shop/PriceFilterComponent.vue'

const activeRange = ref({label: 'All', min: null, max: null});
const filterProducts = computed(() => {
  if(!activeRange.min && activeRange.max){
    return products;
  }
  return products.filter(product => {
    return product.price >= (activeRange.min ?? 0) && product.price <= (activeRange.max ?? Infinity)
  })
})
const filterProduct = (range) =>{
  activeRange.min = range.min;
  activeRange.max = range.max;
}
const priceFilterComponent = ref(null);

const store = useCategoriesStore();

onMounted(()=>{
  store.fetchCategories();
  if(priceFilterComponent.value){
    priceFilterComponent.value.$on('range-selected', filterProducts)
  }
})
const categories = computed(()=> store.allCategories)

</script>