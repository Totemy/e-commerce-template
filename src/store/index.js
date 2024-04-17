import { createStore } from 'vuex';
import { DataService } from '@/services/DataJsonService.js';

export default createStore({
  state: {
    products: [],
    categories: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const products = await DataService.fetchProducts();
        commit('setProducts', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await DataService.fetchCategories();
        commit('setCategories', categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  }
});
