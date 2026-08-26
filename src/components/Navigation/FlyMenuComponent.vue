<template>
  <div class="fly-menu">
    <div class="fly-menu__overlay" @click="$emit('close')"></div>
    <aside class="fly-menu__panel">
      <div class="fly-menu__header">
        <div class="fly-menu__logo">3legant<span class="color-n4">.</span></div>
        <button class="btn btn__icon" @click="$emit('close')">
          <img src="/icons/close.svg" alt="close" />
        </button>
      </div>
      <div class="fly-menu__search">
        <img src="/icons/search.svg" alt="" />
        <input type="text" placeholder="Search" autocomplete="off" />
      </div>
      <nav class="fly-menu__links">
        <router-link class="fly-menu__link" to="/" @click="$emit('close')">Home</router-link>
        <router-link class="fly-menu__link" to="/shop" @click="$emit('close')">
          Shop
          <img src="/icons/chevron-down.svg" alt="" />
        </router-link>
        <router-link class="fly-menu__link" to="/product/tray-table" @click="$emit('close')">
          Product
          <img src="/icons/chevron-down.svg" alt="" />
        </router-link>
        <router-link class="fly-menu__link" to="/contact" @click="$emit('close')">Contact Us</router-link>
        <router-link class="fly-menu__link" to="/admin" @click="$emit('close')">Admin</router-link>
      </nav>
      <div class="fly-menu__spacer"></div>
      <button class="fly-menu__row" type="button" @click="openCart">
        Cart
        <span class="fly-menu__row-icons">
          <img src="/icons/bag.svg" alt="cart" />
          <span class="navbar__count" v-if="cart.count">{{ cart.count }}</span>
        </span>
      </button>
      <router-link class="fly-menu__row" to="/account/wishlist" @click="$emit('close')">
        Wishlist
        <span class="fly-menu__row-icons">
          <img src="/icons/heart.svg" alt="wishlist" />
          <span class="navbar__count" v-if="wishlist.count">{{ wishlist.count }}</span>
        </span>
      </router-link>
      <div class="fly-menu__signin">
        <button class="btn btn__primary" type="button" @click="openSignIn">Sign In</button>
      </div>
      <div class="fly-menu__socials">
        <img src="/icons/instagram.svg" alt="instagram" />
        <img src="/icons/facebook.svg" alt="facebook" />
        <img src="/icons/youtube.svg" alt="youtube" />
      </div>
    </aside>
  </div>
</template>
<script setup>
import { useCartStore } from '@/store/modules/cart.js'
import { useWishlistStore } from '@/store/modules/wishlist.js'
import { useAuthModalStore } from '@/store/modules/authModal.js'

const emit = defineEmits(['close']);
const cart = useCartStore();
const wishlist = useWishlistStore();
const auth = useAuthModalStore();

const openCart = () => {
  emit('close');
  cart.open();
};
const openSignIn = () => {
  emit('close');
  auth.open('signin');
};
</script>
