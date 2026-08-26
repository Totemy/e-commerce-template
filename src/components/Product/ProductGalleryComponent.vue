<template>
  <div class="product-gallery">
    <div class="product-gallery__main">
      <div class="product-gallery__badges">
        <span class="product-card__badge" v-if="isNew">NEW</span>
        <span class="product-card__badge product-card__badge-sale" v-if="discount">-{{ discount }}%</span>
      </div>
      <button
        class="btn product-gallery__arrow product-gallery__arrow-prev"
        v-if="images.length > 1"
        @click="go(-1)"
        aria-label="Previous image"
      >
        <img src="/icons/chevron-right.svg" alt="" />
      </button>
      <img class="product-gallery__img" :src="images[active]" :alt="name" />
      <button
        class="btn product-gallery__arrow product-gallery__arrow-next"
        v-if="images.length > 1"
        @click="go(1)"
        aria-label="Next image"
      >
        <img src="/icons/chevron-right.svg" alt="" />
      </button>
    </div>
    <div class="product-gallery__thumbs" v-if="images.length > 1">
      <button
        class="product-gallery__thumb"
        v-for="(image, index) in images"
        :key="image + index"
        :class="{ 'product-gallery__thumb-active': index === active }"
        @click="active = index"
      >
        <img :src="image" :alt="`${name} ${index + 1}`" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  name: { type: String, default: '' },
  isNew: { type: Boolean, default: false },
  discount: { type: Number, default: null }
});

const active = ref(0);

const go = (dir) => {
  const total = props.images.length;
  active.value = (active.value + dir + total) % total;
};
</script>
