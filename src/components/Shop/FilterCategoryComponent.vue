<template>
  <aside>
    some text
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </aside>
</template>
<script setup>
import {useCategoriesStore} from '@/store/modules/categories.js'
import { computed, onMounted } from 'vue'

const store = useCategoriesStore();


onMounted(()=>{
  store.fetchCategories();
})
const categories = computed(()=> store.allCategories)

</script>