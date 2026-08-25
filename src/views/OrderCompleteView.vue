<template>
  <main>
    <div class="container">
      <section class="checkout">
        <div class="checkout__head">
          <h1>Complete!</h1>
          <CheckoutStepsComponent :current="2" />
        </div>

        <div class="order-complete" v-if="order">
          <p class="order-complete__thanks">Thank you! 🎉</p>
          <h2 class="order-complete__title">Your order has been received</h2>

          <div class="order-complete__thumbs">
            <div class="order-complete__thumb" v-for="item in order.items" :key="item.id">
              <img :src="item.image" :alt="item.name" />
              <span class="order-complete__qty">{{ item.qty }}</span>
            </div>
          </div>

          <dl class="order-complete__details">
            <dt>Order code:</dt>
            <dd>#{{ order.number }}</dd>
            <dt>Date:</dt>
            <dd>{{ orderDate }}</dd>
            <dt>Total:</dt>
            <dd>${{ orderTotal }}</dd>
            <dt>Payment method:</dt>
            <dd>Credit Card</dd>
          </dl>

          <router-link class="btn btn__primary-pill" to="/shop">Purchase history</router-link>
        </div>

        <div class="cart-page__empty" v-else>
          <p>No order to show yet.</p>
          <router-link class="btn btn__primary-home" to="/shop">Continue shopping</router-link>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/modules/cart.js'
import CheckoutStepsComponent from '@/components/Checkout/CheckoutStepsComponent.vue'

const cart = useCartStore();

const order = computed(() => cart.lastOrder);
const orderTotal = computed(() => Number(cart.lastOrder?.total ?? 0).toFixed(2));
const orderDate = computed(() => {
  if (!cart.lastOrder) return '';
  return new Date(cart.lastOrder.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
</script>
