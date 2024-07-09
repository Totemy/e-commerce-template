<template>
  <aside>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </aside>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
const categories = computed(()=> store.getters['categories/categories'])

onMounted(()=>{
  store.dispatch('categories/fetchCategories');
})
</script>