<template>
  <article class="cart-line">
    <div class="cart-line__media">
      <img :src="item.image" :alt="item.name" />
    </div>
    <div class="cart-line__body">
      <h3 class="cart-line__name">{{ item.name }}</h3>
      <span class="cart-line__meta" v-if="item.color">Color: {{ item.color }}</span>
      <div class="cart-line__stepper">
        <button type="button" aria-label="Decrease quantity" @click="cart.decrement(item.id)">−</button>
        <span>{{ item.qty }}</span>
        <button type="button" aria-label="Increase quantity" @click="cart.increment(item.id)">+</button>
      </div>
    </div>
    <div class="cart-line__aside">
      <span class="cart-line__price">${{ lineTotal }}</span>
      <button class="btn btn__icon cart-line__remove" aria-label="Remove" @click="cart.remove(item.id)">
        <img src="/icons/close.svg" alt="" />
      </button>
    </div>
  </article>
</template>
<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/modules/cart.js'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const cart = useCartStore();
const lineTotal = computed(() => (props.item.price * props.item.qty).toFixed(2));
</script>
