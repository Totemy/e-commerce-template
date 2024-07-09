import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '@/firebase.js';

export default {
  namespaced: true,
  state: () => ({
    categories: [],
  }),
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      const categoriesCollection = collection(database, 'categories');
      onSnapshot(categoriesCollection, (querySnapshot) => {
        const categories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        commit('setCategories', categories);
      });
    },
  },
  getters: {
    categories(state) {
      return state.categories;
    },
  },
};
