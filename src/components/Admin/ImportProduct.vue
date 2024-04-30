<template>
  <div>
    <h1>Додати продукт</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">Назва продукту:</label>
        <input type="text" id="productName" v-model="productName" class="form-control">
      </div>
      <div class="form-group">
        <label for="category">Категорія:</label>
        <select id="category" v-model="categoryId" class="form-control">
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="sizes">Розміри:</label>
        <input type="number" id="sizes" v-model="sizes" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Ціна:</label>
        <input type="number" id="price" v-model="price" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Додати</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { database } from '@/firebase.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const productName = ref('');
const categoryId = ref('');
const sizes = ref('');
const price = ref(0);

const addProduct = async () => {
  try {
    const productsRef = collection(database, 'products');
    const docRef = await addDoc(productsRef, {
      name: productName.value,
      categoryId: categoryId.value,
      sizes: sizes.value,
      price: price.value,
    });

    console.log('Product added with ID: ', docRef.id);
    productName.value = '';
    categoryId.value = '';
    sizes.value = '';
    price.value = 0;
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};

// Дістаємо список категорій з Firebase
const categories = ref([]);
const fetchCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(database, 'categories'));
    categories.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching categories: ', error);
  }
};

// Викликаємо функцію для отримання списку категорій
fetchCategories();
</script>
