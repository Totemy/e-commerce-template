import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from '@/firebase.js'

const app = createApp(App)

firebaseApp;

app.use(router)
app.mount('#app')
