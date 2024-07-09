import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from '@/firebase.js'
import store from '@/store/index.js'

const app = createApp(App)

firebaseApp;
app.use(store)
app.use(router)
app.mount('#app')
