import {defineStore} from 'pinia';
import {collection, onSnapshot} from 'firebase/firestore';
import { database } from '@/firebase.js';

export const useCategoriesStore = defineStore('categories', {
  state:() => ({
    categories: [],
  }),
  actions:{
    fetchCategories(){
      const categoriesCollection = collection(database, 'categories');
      onSnapshot(categoriesCollection, (querySnapshot) =>{
        const categories = querySnapshot.docs.map((doc => ({id: doc.id, ...doc.data() })));
        this.$patch({categories});
      });
    }
  },
  getters:{
    allCategories: (state) => state.categories,
  }
})