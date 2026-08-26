<template>
  <main class="container">
    <div class="account-page">
      <h1>My Account</h1>
      <div class="account-page__body">
        <AccountSidebarComponent />
        <div class="account-page__panel">
          <h2>Your Wishlist</h2>
          <table class="orders-table wishlist-table" v-if="wishlist.count">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in wishlist.items" :key="item.id">
                <td>
                  <div class="wishlist-table__product">
                    <button class="wishlist-table__remove" type="button" @click="wishlist.remove(item.id)" aria-label="Remove">
                      <img src="/icons/close.svg" alt="" />
                    </button>
                    <div class="cart-line__media">
                      <img :src="item.image" :alt="item.name" />
                    </div>
                    <div>
                      <span class="cart-line__name">{{ item.name }}</span>
                      <span class="cart-line__meta" v-if="item.color">Color: {{ item.color }}</span>
                    </div>
                  </div>
                </td>
                <td>${{ item.price.toFixed(2) }}</td>
                <td>
                  <button class="btn btn__primary wishlist-table__add" type="button" @click="addToCart(item)">Add to cart</button>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="cart-page__empty" v-else>
            Your wishlist is empty.
            <router-link class="btn btn__primary-home" to="/shop">Continue shopping</router-link>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { useWishlistStore } from '@/store/modules/wishlist.js'
import { useCartStore } from '@/store/modules/cart.js'
import AccountSidebarComponent from '@/components/Account/AccountSidebarComponent.vue'

const wishlist = useWishlistStore();
const cart = useCartStore();

const addToCart = (item) => {
  cart.add(item);
  cart.open();
};
</script>
