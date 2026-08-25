<template>
  <main>
    <div class="container">
      <section class="checkout">
        <div class="checkout__head">
          <h1>Check Out</h1>
          <CheckoutStepsComponent :current="1" />
        </div>

        <form class="checkout__body" v-if="!cart.isEmpty" @submit.prevent="submit">
          <div class="checkout__form">
            <div class="form-card">
              <h2 class="form-card__title">Contact Information</h2>
              <div class="form-card__grid">
                <label class="field">
                  <span class="field__label">First name</span>
                  <input type="text" v-model="form.firstName" placeholder="First name" required />
                </label>
                <label class="field">
                  <span class="field__label">Last name</span>
                  <input type="text" v-model="form.lastName" placeholder="Last name" required />
                </label>
                <label class="field field-wide">
                  <span class="field__label">Phone number</span>
                  <input type="tel" v-model="form.phone" placeholder="Phone number" required />
                </label>
                <label class="field field-wide">
                  <span class="field__label">Email address</span>
                  <input type="email" v-model="form.email" placeholder="Your Email" required />
                </label>
              </div>
            </div>

            <div class="form-card">
              <h2 class="form-card__title">Shipping Address</h2>
              <div class="form-card__grid">
                <label class="field field-wide">
                  <span class="field__label">Street Address <span class="field__req">*</span></span>
                  <input type="text" v-model="form.street" placeholder="Street Address" required />
                </label>
                <label class="field field-wide">
                  <span class="field__label">Country <span class="field__req">*</span></span>
                  <select v-model="form.country" required>
                    <option value="" disabled>Country</option>
                    <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                  </select>
                </label>
                <label class="field field-wide">
                  <span class="field__label">Town / City <span class="field__req">*</span></span>
                  <input type="text" v-model="form.city" placeholder="Town / City" required />
                </label>
                <label class="field">
                  <span class="field__label">State</span>
                  <input type="text" v-model="form.state" placeholder="State" />
                </label>
                <label class="field">
                  <span class="field__label">Zip Code</span>
                  <input type="text" v-model="form.zip" placeholder="Zip Code" />
                </label>
              </div>
              <label class="checkbox-row">
                <input type="checkbox" v-model="form.differentBilling" />
                Use a different billing address (optional)
              </label>
            </div>

            <div class="form-card">
              <h2 class="form-card__title">Payment method</h2>
              <div class="summary__options">
                <label
                  class="option-row"
                  :class="{ 'option-row-checked': form.payment === 'card' }"
                >
                  <input type="radio" name="payment" value="card" v-model="form.payment" />
                  <span class="option-row__label">Pay by Card Credit</span>
                  <img src="/icons/money.svg" alt="" />
                </label>
                <label
                  class="option-row"
                  :class="{ 'option-row-checked': form.payment === 'paypal' }"
                >
                  <input type="radio" name="payment" value="paypal" v-model="form.payment" />
                  <span class="option-row__label">Paypal</span>
                </label>
              </div>

              <!--
                Демо-макет форми оплати. Поля нікуди не надсилаються і не
                зберігаються: submit лише формує локальний запис замовлення.
              -->
              <template v-if="form.payment === 'card'">
                <div class="form-card__divider"></div>
                <div class="form-card__grid">
                  <label class="field field-wide">
                    <span class="field__label">Card number</span>
                    <input type="text" inputmode="numeric" autocomplete="off" placeholder="1234 1234 1234" />
                  </label>
                  <label class="field">
                    <span class="field__label">Expiration date</span>
                    <input type="text" autocomplete="off" placeholder="MM/YY" />
                  </label>
                  <label class="field">
                    <span class="field__label">CVC</span>
                    <input type="text" autocomplete="off" placeholder="CVC code" />
                  </label>
                </div>
              </template>
            </div>

            <div class="checkout__actions">
              <button class="btn btn__primary" type="submit">Place Order</button>
            </div>
          </div>

          <aside class="summary">
            <h2 class="summary__title">Order summary</h2>
            <div class="summary__lines">
              <CartLineComponent v-for="item in cart.items" :key="item.id" :item="item" />
            </div>
            <div class="coupon__field">
              <input type="text" v-model="coupon" placeholder="Input" />
              <button class="coupon__apply coupon__apply-solid" type="button">Apply</button>
            </div>
            <div class="summary__row">
              <span>Shipping</span>
              <span>{{ shippingLabel }}</span>
            </div>
            <div class="summary__row">
              <span>Subtotal</span>
              <span>${{ subtotal }}</span>
            </div>
            <div class="summary__row summary__row-total">
              <span>Total</span>
              <span>${{ total }}</span>
            </div>
          </aside>
        </form>

        <div class="cart-page__empty" v-else>
          <p>Your cart is empty, so there is nothing to check out.</p>
          <router-link class="btn btn__primary-home" to="/shop">Continue shopping</router-link>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/modules/cart.js'
import CartLineComponent from '@/components/Cart/CartLineComponent.vue'
import CheckoutStepsComponent from '@/components/Checkout/CheckoutStepsComponent.vue'

const cart = useCartStore();
const router = useRouter();

const countries = ['Ukraine', 'Poland', 'Germany', 'United States', 'Vietnam'];
const coupon = ref('');

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  street: '',
  country: '',
  city: '',
  state: '',
  zip: '',
  differentBilling: false,
  payment: 'card'
});

const subtotal = computed(() => cart.subtotal.toFixed(2));
const total = computed(() => cart.total.toFixed(2));
const shippingLabel = computed(() => cart.shippingCost ? '$' + cart.shippingCost.toFixed(2) : 'Free');

// Спосіб доставки обирається на сторінці Cart, тут лише показуємо підсумок.
const submit = () => {
  const order = cart.placeOrder();
  if (order) router.push('/order-complete');
};
</script>
