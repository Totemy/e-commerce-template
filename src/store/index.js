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
      const products = await DataService.fetchProducts();
      commit('setProducts', products);
    },
    async fetchCategories({ commit }) {
      const categories = await DataService.fetchCategories();
      commit('setCategories', categories);
    }
  }
});