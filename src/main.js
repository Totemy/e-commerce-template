import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from '@/firebase.js'
import { createPinia } from 'pinia';
import { reveal } from '@/directives/reveal.js'

const app = createApp(App)
const pinia = createPinia();

firebaseApp;

app.use(router)
app.use(pinia)
app.directive('reveal', reveal)
app.mount('#app')
