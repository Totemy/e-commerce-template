import {defineStore} from 'pinia';
import { priceRanges } from '@/data/demo.js';

export const useFiltersStore = defineStore('filters', {
  state:() => ({
    activeCategoryId: null,
    activeRange: priceRanges[0],
  }),
  actions:{
    setCategory(categoryId){
      this.activeCategoryId = categoryId;
    },
    setRange(range){
      this.activeRange = range;
    }
  },
  getters:{
    matches: (state) => (product) => {
      const { activeCategoryId, activeRange } = state;
      if (activeCategoryId && product.categoryId !== activeCategoryId) return false;
      const price = Number(product.price ?? 0);
      if (activeRange.min !== null && price < activeRange.min) return false;
      if (activeRange.max !== null && price > activeRange.max) return false;
      return true;
    }
  }
})
