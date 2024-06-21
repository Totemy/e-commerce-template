<template>
  <section class="container">
    <div class="category-view">
      <div class="category-view__text">
        <h1 class="category-view__title">Simply Unique<span class="color-n4">/</span>
          Simply Better<span class="color-n4">.</span></h1>
        <h4 class="category-view__subtext">
          <span class="category-view__subtext-span">3legant</span>  is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </h4>
      </div>

      <div class="category-view__list" >
        <div class="category-view__item" v-for="category in categories" :key="category.id">
          <img class="category-view__img" :src="category.image" alt="{{category.name}}"/>
          <div class="category-view__overlay">
            <h3>{{category.name}}</h3>
            <button class="btn btn__primary-home">Shop now</button>
          </div>
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