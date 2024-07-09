import { createStore } from 'vuex'
import categories from '@/store/modules/categories.js'

const store = createStore({
  modules: {
    categories
  }
})

export default store;