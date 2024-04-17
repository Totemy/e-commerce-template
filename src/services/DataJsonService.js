
import axios from 'axios';

// Define the base URL for local JSON files
const baseURL = '../json/';

export const DataService = {
  // Function to fetch products from local JSON file
  async fetchProducts() {
    try {
      // Make a GET request to the products JSON file
      const response = await axios.get(`${baseURL}products.json`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Handle any errors
      console.error('Error fetching products:', error);
      // Return an empty array or handle the error as needed
      return [];
    }
  },

  // Function to fetch categories from local JSON file
  async fetchCategories() {
    try {
      // Make a GET request to the categories JSON file
      const response = await axios.get(`${baseURL}categories.json`);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Handle any errors
      console.error('Error fetching categories:', error);
      // Return an empty array or handle the error as needed
      return [];
    }
  }
};
