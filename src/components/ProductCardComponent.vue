<template>
  <article class="product-card" :class="{ 'product-card--list': list }">
    <div class="product-card__media">
      <div class="product-card__badges">
        <span class="product-card__badge" v-if="product.isNew">NEW</span>
        <span class="product-card__badge product-card__badge-sale" v-if="discount">-{{ discount }}%</span>
      </div>
      <button
        class="btn btn__icon product-card__wish"
        :class="{ 'product-card__wish-active': inWishlist }"
        aria-label="Add to wishlist"
        @click="wishlist.toggle(product)"
      >
        <img :src="inWishlist ? '/icons/heart-filled.svg' : '/icons/heart.svg'" alt="" />
      </button>
      <router-link :to="`/product/${product.id}`">
        <img class="product-card__img" :src="image" :alt="product.name" />
      </router-link>
      <button class="btn btn__primary product-card__cart" @click="addToCart">Add to cart</button>
    </div>
    <div class="product-card__body">
      <div class="product-card__rating">
        <img
          v-for="star in 5"
          :key="star"
          :class="{ 'product-card__rating-off': star > rating }"
          src="/icons/star.svg"
          alt=""
        />
      </div>
      <router-link class="product-card__name" :to="`/product/${product.id}`">{{ product.name }}</router-link>
      <div class="product-card__prices">
        <span class="product-card__price">${{ price }}</span>
        <span class="product-card__price-old" v-if="product.oldPrice">${{ oldPrice }}</span>
      </div>
    </div>
  </article>
</template>
<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/modules/cart.js'
import { useWishlistStore } from '@/store/modules/wishlist.js'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  list: {
    type: Boolean,
    default: false
  }
});

const image = computed(() => {
  if (props.product.image) return props.product.image;
  if (Array.isArray(props.product.images)) return props.product.images[0];
  return '';
});
const cart = useCartStore();
const wishlist = useWishlistStore();
const inWishlist = computed(() => wishlist.has(props.product.id));

const addToCart = () => {
  cart.add(props.product);
  cart.open();
};

const price = computed(() => Number(props.product.price ?? 0).toFixed(2));
const oldPrice = computed(() => props.product.oldPrice ? Number(props.product.oldPrice).toFixed(2) : null);
const rating = computed(() => Number(props.product.rating ?? 5));
const discount = computed(() => {
  const { price: current, oldPrice } = props.product;
  if (!oldPrice || !current || Number(oldPrice) <= Number(current)) return null;
  return Math.round((1 - Number(current) / Number(oldPrice)) * 100);
});
</script>
