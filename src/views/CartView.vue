<template>
  <main>
    <div class="container">
      <section class="cart-page">
        <div class="cart-page__head">
          <div class="shop-banner__crumbs">
            <router-link to="/">Home</router-link>
            <img src="/icons/chevron-right.svg" alt="" />
            <span>Cart</span>
          </div>
          <h1>Cart</h1>
        </div>

        <div class="cart-page__body" v-if="!cart.isEmpty">
          <div class="cart-page__items">
            <CartLineComponent v-for="item in cart.items" :key="item.id" :item="item" />
          </div>
          <aside class="cart-page__summary">
            <h2>Cart summary</h2>
            <div class="cart-flyout__row">
              <span>Subtotal</span>
              <span>${{ subtotal }}</span>
            </div>
            <div class="cart-flyout__row cart-flyout__row-total">
              <span>Total</span>
              <span>${{ subtotal }}</span>
            </div>
            <button class="btn btn__primary">Checkout</button>
            <router-link class="btn btn__primary-home cart-page__continue" to="/shop">
              Continue shopping
            </router-link>
          </aside>
        </div>

        <div class="cart-page__empty" v-else>
          <p>Your cart is empty.</p>
          <router-link class="btn btn__primary-home" to="/shop">Continue shopping</router-link>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/modules/cart.js'
import CartLineComponent from '@/components/Cart/CartLineComponent.vue'

const cart = useCartStore();
const subtotal = computed(() => cart.subtotal.toFixed(2));
</script>
