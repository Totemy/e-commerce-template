<template>
  <aside class="account-sidebar">
    <div class="account-sidebar__avatar">
      <span>{{ initials }}</span>
      <button class="account-sidebar__avatar-edit" type="button" aria-label="Change photo">
        <img src="/icons/camera.svg" alt="" />
      </button>
    </div>
    <h3 class="account-sidebar__name">{{ demoUser.displayName }}</h3>
    <nav class="account-sidebar__nav">
      <router-link class="account-sidebar__link" to="/account" :class="{ 'account-sidebar__link-active': route.path === '/account' }">Account</router-link>
      <router-link class="account-sidebar__link" to="/account/address" :class="{ 'account-sidebar__link-active': route.path === '/account/address' }">Address</router-link>
      <router-link class="account-sidebar__link" to="/account/orders" :class="{ 'account-sidebar__link-active': route.path === '/account/orders' }">Orders</router-link>
      <router-link class="account-sidebar__link" to="/account/wishlist" :class="{ 'account-sidebar__link-active': route.path === '/account/wishlist' }">Wishlist</router-link>
      <router-link class="account-sidebar__link" to="/">Log Out</router-link>
    </nav>
  </aside>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { demoUser } from '@/data/demo.js'

const route = useRoute();
const initials = computed(() => `${demoUser.firstName[0]}${demoUser.lastName[0]}`);
</script>
