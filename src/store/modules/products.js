import {defineStore} from 'pinia';
import {collection, onSnapshot} from 'firebase/firestore';
import { database } from '@/firebase.js';
import { demoProducts } from '@/data/demo.js';

export const useProductsStore = defineStore('products', {
  state:() => ({
    products: [],
  }),
  actions:{
    fetchProducts(){
      if (!database) return;
      const productsCollection = collection(database, 'products');
      onSnapshot(productsCollection, (querySnapshot) =>{
        const products = querySnapshot.docs.map((doc => ({id: doc.id, ...doc.data() })));
        this.$patch({products});
      });
    }
  },
  getters:{
    allProducts: (state) => state.products.length ? state.products : demoProducts,
  }
})
