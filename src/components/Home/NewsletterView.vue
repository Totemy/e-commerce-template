<template>
  <section class="newsletter">
    <div class="newsletter__aside newsletter__aside-left">
      <img src="/newsletter/1.jpg" alt="" />
    </div>
    <div class="newsletter__content">
      <h2>Join Our Newsletter</h2>
      <p>Sign up for deals, new products and promotions</p>
      <form class="newsletter__form" @submit.prevent="subscribe">
        <img src="/icons/mail.svg" alt="" />
        <input type="email" v-model="email" placeholder="Email address" autocomplete="off" />
        <button class="btn newsletter__submit" type="submit">Signup</button>
      </form>
    </div>
    <div class="newsletter__aside newsletter__aside-right">
      <img src="/gallery/2.jpg" alt="" />
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const email = ref('');

const subscribe = () => {
  email.value = '';
};
</script>
