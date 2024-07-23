<template>
  <section>
    <div>
      <h2>Продукти</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>Категорія: {{ getCategoryName(product.categoryId) }}</p>
          <p>Розміри: {{ product.sizes }}</p>
          <p>Ціна: {{ product.price }}</p>
          <img :src="product.image"  :alt="product.name" />
        </li>
      </ul>
    </div>
  </section>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { database } from '@/firebase.js';
import { collection, onSnapshot } from 'firebase/firestore';

const categories = ref([]);
const products = ref([]);

let unsubscribeCategories = null;
let unsubscribeProducts = null;

const getCategories = () => {
  const categoriesCollection = collection(database, 'categories');
  unsubscribeCategories = onSnapshot(categoriesCollection, (querySnapshot) => {
    categories.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
};

const getProducts = () => {
  const productsCollection = collection(database, 'products');
  unsubscribeProducts = onSnapshot(productsCollection, (querySnapshot) => {
    products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
};

const getCategoryName = (categoryId) => {
  const category = categories.value.find(category => category.id === categoryId);
  return category ? category.name : '';
};

onMounted(() => {
  getCategories();
  getProducts();
});

onUnmounted(() => {
  if (unsubscribeCategories) unsubscribeCategories();
  if (unsubscribeProducts) unsubscribeProducts();
});
</script>

