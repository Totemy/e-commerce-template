import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import CatalogComponent from '@/components/Catalog/CatalogComponent.vue'
import ShopView from '@/views/ShopView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },

    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogComponent
    }
  ]
})

export default router
