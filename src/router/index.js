import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import OrderCompleteView from '@/views/OrderCompleteView.vue'
import AccountView from '@/views/AccountView.vue'
import AccountAddressView from '@/views/AccountAddressView.vue'
import AccountOrdersView from '@/views/AccountOrdersView.vue'
import AccountWishlistView from '@/views/AccountWishlistView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
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
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/order-complete',
      name: 'order-complete',
      component: OrderCompleteView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/account/address',
      name: 'account-address',
      component: AccountAddressView
    },
    {
      path: '/account/orders',
      name: 'account-orders',
      component: AccountOrdersView
    },
    {
      path: '/account/wishlist',
      name: 'account-wishlist',
      component: AccountWishlistView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogPostView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
