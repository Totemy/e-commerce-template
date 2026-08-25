<template>
  <main>
    <div class="container">
      <section class="checkout">
        <div class="checkout__head">
          <h1>Cart</h1>
          <CheckoutStepsComponent :current="0" />
        </div>

        <div class="checkout__body" v-if="!cart.isEmpty">
          <div>
            <div class="cart-table">
              <div class="cart-table__head">
                <span>Product</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Subtotal</span>
              </div>
              <div class="cart-table__row" v-for="item in cart.items" :key="item.id">
                <div class="cart-table__product">
                  <div class="cart-line__media">
                    <img :src="item.image" :alt="item.name" />
                  </div>
                  <div class="cart-table__info">
                    <span class="cart-line__name">{{ item.name }}</span>
                    <span class="cart-line__meta" v-if="item.color">Color: {{ item.color }}</span>
                    <button class="cart-table__remove" type="button" @click="cart.remove(item.id)">
                      <img src="/icons/close.svg" alt="" />
                      Remove
                    </button>
                  </div>
                </div>
                <div class="cart-line__stepper">
                  <button type="button" aria-label="Decrease quantity" @click="cart.decrement(item.id)">−</button>
                  <span>{{ item.qty }}</span>
                  <button type="button" aria-label="Increase quantity" @click="cart.increment(item.id)">+</button>
                </div>
                <span class="cart-table__price">${{ item.price.toFixed(2) }}</span>
                <span class="cart-table__subtotal">${{ (item.price * item.qty).toFixed(2) }}</span>
              </div>
            </div>

            <div class="coupon">
              <h2 class="coupon__title">Have a coupon?</h2>
              <p class="coupon__hint">Add your code for an instant cart discount</p>
              <div class="coupon__field">
                <img src="/icons/ticket.svg" alt="" />
                <input type="text" v-model="coupon" placeholder="Coupon Code" />
                <button class="coupon__apply" type="button">Apply</button>
              </div>
            </div>
          </div>

          <aside class="summary">
            <h2 class="summary__title">Cart summary</h2>
            <div class="summary__options">
              <label
                class="option-row"
                v-for="option in shippingOptions"
                :key="option.id"
                :class="{ 'option-row-checked': cart.shippingId === option.id }"
              >
                <input
                  type="radio"
                  name="cart-shipping"
                  :value="option.id"
                  :checked="cart.shippingId === option.id"
                  @change="cart.setShipping(option.id)"
                />
                <span class="option-row__label">{{ option.label }}</span>
                <span class="option-row__note">{{ option.note }}</span>
              </label>
            </div>
            <div class="summary__row">
              <span>Subtotal</span>
              <span>${{ subtotal }}</span>
            </div>
            <div class="summary__row summary__row-total">
              <span>Total</span>
              <span>${{ total }}</span>
            </div>
            <div class="summary__cta">
              <router-link class="btn btn__primary" to="/checkout">Checkout</router-link>
            </div>
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
import { computed, ref } from 'vue'
import { useCartStore } from '@/store/modules/cart.js'
import { shippingOptions } from '@/data/demo.js'
import CheckoutStepsComponent from '@/components/Checkout/CheckoutStepsComponent.vue'

const cart = useCartStore();
const coupon = ref('');

const subtotal = computed(() => cart.subtotal.toFixed(2));
const total = computed(() => cart.total.toFixed(2));
</script>
