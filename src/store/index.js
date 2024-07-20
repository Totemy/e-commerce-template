import { createStore } from 'vuex'
import categories from '@/store/modules/categories.js'
import products from '@/store/modules/products.js'

const store = createStore({
  modules: {
    categories,
    products
  }
})

export default store;