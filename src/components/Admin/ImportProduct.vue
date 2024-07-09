<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productName">name product:</label>
        <input type="text" id="productName" v-model="productName" class="form-control">
      </div>
      <div class="form-group">
        <label for="category">Category : :</label>
        <select id="category" v-model="categoryId" class="form-control">
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="sizes">Size :</label>
        <input type="number" id="sizes" v-model="sizes" class="form-control">
      </div>
      <div class="form-group">
        <label for="image">Image link</label>
        <input type="text" id="image" v-model="image" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Price :</label>
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
const image = ref('');
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
      image: image.value,
    });

    console.log('Product added with ID: ', docRef.id);
    productName.value = '';
    categoryId.value = '';
    sizes.value = '';
    price.value = 0;
    image.value = '';
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};

// get category from Firebase
const categories = ref([]);
const fetchCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(database, 'categories'));
    categories.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching categories: ', error);
  }
};

fetchCategories();
</script>
