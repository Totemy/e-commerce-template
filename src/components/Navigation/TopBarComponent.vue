<template>
  <section class="topbar" v-if="visible">
    <div class="container">
      <div class="topbar__content">
        <div class="topbar__text">
          <img src="/icons/ticket.svg" alt="" />
          30% off storewide — Limited time!
        </div>
        <a class="topbar__link" href="/shop">Shop Now →</a>
        <button class="btn btn__icon topbar__close" @click="visible = false">
          <img src="/icons/close.svg" alt="close" />
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const visible = ref(true);
</script>
