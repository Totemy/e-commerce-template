<template>
  <div>
    <h2>Категорії</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>

    <h2>Продукти</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>Категорія: {{ getCategoryName(product.categoryId) }}</p>
        <p>Розміри: {{ product.sizes }}</p>
        <p>Ціна: {{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { database } from '@/firebase.js';
import { getDocs, collection } from 'firebase/firestore';

const categories = ref([]);
const products = ref([]);

const getCategories = async () => {
  const querySnapshot = await getDocs(collection(database, 'categories'));
  categories.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getProducts = async () => {
  const querySnapshot = await getDocs(collection(database, 'products'));
  products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getCategoryName = (categoryId) => {
  const category = categories.value.find(category => category.id === categoryId);
  return category ? category.name : '';
};

onMounted(() => {
  getCategories();
  getProducts();
});
</script>
