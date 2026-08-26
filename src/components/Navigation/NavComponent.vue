<template>
  <header class="header">
    <div class="container">
    <nav class="navbar">
      <div class="navbar__left">
        <button class="btn btn__icon navbar__burger" @click="openBar = true">
          <img src="/icons/menu.svg" alt="menu" />
        </button>
        <router-link class="navbar__logo" to="/">
          3legant<span class="color-n4">.</span>
        </router-link>
      </div>
      <div class="navbar__links">
        <router-link class="navbar__link" to="/" :class="{ 'navbar__link-active': activeRoute === '/' }" >Home</router-link>
        <router-link class="navbar__link" to="/shop" :class="{ 'navbar__link-active': activeRoute === '/shop' }">Shop</router-link>
        <router-link class="navbar__link" to="/product/tray-table" :class="{ 'navbar__link-active': activeRoute.startsWith('/product') }" >Product</router-link>
        <router-link class="navbar__link" to="/contact" :class="{ 'navbar__link-active': activeRoute === '/contact' }">Contact Us</router-link>
        <router-link class="navbar__link" to="/admin" :class="{ 'navbar__link-active': activeRoute === '/admin' }" >Admin</router-link>
      </div>
     <div class="navbar__buttons">
          <button class="btn btn__nav only-desktop"> <img src="/icons/search.svg" alt="search" /> </button>
          <button class="btn btn__nav only-desktop" @click="auth.open('signin')"><img src="/icons/account.svg" alt="account" /> </button>
          <button class="btn btn__nav navbar__bag" @click="cart.open()">
            <img src="/icons/bag.svg" alt="shop-bag" />
            <span class="navbar__count" v-if="cart.count">{{ cart.count }}</span>
          </button>
     </div>
    </nav>
    </div>
    <FlyMenuComponent v-if="openBar" @close="openBar = false" />
    <CartFlyoutComponent v-if="cart.isOpen" />
    <AuthModalComponent v-if="auth.isOpen" />
  </header>
</template>
<script>
import FlyMenuComponent from '@/components/Navigation/FlyMenuComponent.vue'
import CartFlyoutComponent from '@/components/Cart/CartFlyoutComponent.vue'
import AuthModalComponent from '@/components/Auth/AuthModalComponent.vue'
import { useCartStore } from '@/store/modules/cart.js'
import { useAuthModalStore } from '@/store/modules/authModal.js'

export default {
  components: { FlyMenuComponent, CartFlyoutComponent, AuthModalComponent },
  data() {
    return {
      activeRoute: '',
      openBar: false,
      cart: useCartStore(),
      auth: useAuthModalStore()
    };
  },
  created() {
    this.activeRoute = this.$route.path;
  },
  watch: {
    '$route'(to) {
      this.activeRoute = to.path;
      this.openBar = false;
      this.cart.close();
      this.auth.close();
    }
  }
}
</script>
