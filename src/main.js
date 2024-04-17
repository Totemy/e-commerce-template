import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

store.dispatch('fetchProducts');
store.dispatch('fetchCategories');
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
