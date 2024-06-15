<template>
  <section class="container">
    <div class="category-view">
      <div class="category-view__text">
        <h1 class="category-view__title">Simply Unique<span class="category-view__title-span">/</span>
          Simply Better<span class="category-view__title-span">.</span></h1>
        <h4 class="category-view__subtext">
          <span class="category-view__subtext-span">3legant</span>  is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </h4>
      </div>

      <div class="home-category__list" v-for="category in categories" :key="category.id">
        <div class="home-category__item">
            <h3>{{category.name}}</h3>
            <button>Shop now -></button>
            <img class="home-category__img" :src="category.image" alt="{{category.name}}"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { collection, onSnapshot } from 'firebase/firestore'
import { database } from '@/firebase.js'
import { onMounted, onUnmounted, ref } from 'vue'
const categories = ref([]);
let unsubscribeCategories = null;
const getCategories = () => {
  const categoriesCollection = collection(database, 'categories');
  unsubscribeCategories = onSnapshot(categoriesCollection, (querySnapshot) => {
    categories.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
};
onMounted(() => {
  getCategories();
});
onUnmounted(() => {
  if (unsubscribeCategories) unsubscribeCategories();
});
</script>