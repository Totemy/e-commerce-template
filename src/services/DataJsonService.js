
import axios from 'axios';

export const DataService = {
  async fetchProducts() {
    const response = await axios.get('/api/products.json');
    return response.data;
  },

  async fetchCategories() {
    const response = await axios.get('/api/categories.json');
    return response.data;
  }
};
