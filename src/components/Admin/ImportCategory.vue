<template>
  <div>
    <h1>Додати категорію</h1>
    <form @submit.prevent="addCategory">
      <div class="form-group">
        <label for="categoryName">Назва категорії:</label>
        <input type="text" id="categoryName" v-model="categoryName" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Додати</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { database } from '@/firebase.js';
import {
  addDoc,
  collection,
} from "firebase/firestore";

const categoryName = ref('');

const addCategory = async () => {
  if (!categoryName.value) {
    console.error('Category name cannot be empty');
    return;
  }

  try {
    const categoriesRef = collection(database, 'categories');
    const docRef = await addDoc(categoriesRef, { name: categoryName.value });
    console.log('Category added with ID: ', docRef.id);
    categoryName.value = '';
  } catch (error) {
    console.error('Error adding category: ', error);
  }
};
</script>
