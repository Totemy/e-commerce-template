<template>
  <div class="cart-flyout">
    <div class="cart-flyout__overlay" @click="cart.close()"></div>
    <aside class="cart-flyout__panel">
      <div class="cart-flyout__header">
        <h2>Cart</h2>
        <button class="btn btn__icon" aria-label="Close cart" @click="cart.close()">
          <img src="/icons/close.svg" alt="" />
        </button>
      </div>

      <div class="cart-flyout__items" v-if="!cart.isEmpty">
        <CartLineComponent v-for="item in cart.items" :key="item.id" :item="item" />
      </div>
      <div class="cart-flyout__empty" v-else>
        <p>Your cart is empty.</p>
        <router-link class="btn btn__primary-home" to="/shop" @click="cart.close()">
          Continue shopping
        </router-link>
      </div>

      <div class="cart-flyout__summary" v-if="!cart.isEmpty">
        <div class="cart-flyout__row">
          <span>Subtotal</span>
          <span>${{ subtotal }}</span>
        </div>
        <div class="cart-flyout__row cart-flyout__row-total">
          <span>Total</span>
          <span>${{ subtotal }}</span>
        </div>
        <div class="cart-flyout__checkout">
          <button class="btn btn__primary">Checkout</button>
        </div>
        <router-link class="cart-flyout__view" to="/cart" @click="cart.close()">View Cart</router-link>
      </div>
    </aside>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/modules/cart.js'
import CartLineComponent from '@/components/Cart/CartLineComponent.vue'

const cart = useCartStore();
const subtotal = computed(() => cart.subtotal.toFixed(2));
</script>
