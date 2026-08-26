<template>
  <main class="container" v-if="product">
    <div class="product-page__crumbs">
      <router-link to="/">Home</router-link>
      <img src="/icons/chevron-right.svg" alt="" />
      <router-link to="/shop">Shop</router-link>
      <template v-if="category">
        <img src="/icons/chevron-right.svg" alt="" />
        <router-link to="/shop">{{ category.name }}</router-link>
      </template>
      <img src="/icons/chevron-right.svg" alt="" />
      <span>Product</span>
    </div>

    <div class="product-page__top">
      <ProductGalleryComponent
        :images="product.images ?? [product.image]"
        :name="product.name"
        :is-new="product.isNew"
        :discount="discount"
      />

      <div class="product-page__info">
        <div class="product-page__rating">
          <div class="product-card__rating">
            <img
              v-for="star in 5"
              :key="star"
              :class="{ 'product-card__rating-off': star > (product.rating ?? 0) }"
              src="/icons/star.svg"
              alt=""
            />
          </div>
          <span v-if="demoReviews.length">{{ demoReviews.length }} Reviews</span>
        </div>

        <h1>{{ product.name }}</h1>
        <p class="product-page__desc" v-if="product.description">{{ product.description }}</p>

        <div class="product-page__price">
          <span class="product-page__price-now">${{ price.toFixed(2) }}</span>
          <span class="product-page__price-old" v-if="product.oldPrice">${{ Number(product.oldPrice).toFixed(2) }}</span>
        </div>

        <ProductCountdownComponent v-if="product.oldPrice" />

        <div class="product-page__row" v-if="product.measurements">
          <h4>Measurements</h4>
          <p>{{ product.measurements }}</p>
        </div>

        <div class="product-page__row" v-if="product.colors?.length">
          <h4>Choose Color</h4>
          <p>{{ activeColor?.label }}</p>
          <div class="product-page__colors">
            <button
              class="product-page__color"
              v-for="color in product.colors"
              :key="color.id"
              :class="{ 'product-page__color-active': color.id === activeColorId }"
              :style="{ '--swatch': color.hex }"
              :aria-label="color.label"
              @click="activeColorId = color.id"
            ></button>
          </div>
        </div>

        <div class="product-page__actions">
          <div class="cart-line__stepper product-page__stepper">
            <button type="button" aria-label="Decrease quantity" @click="qty = Math.max(1, qty - 1)">−</button>
            <span>{{ qty }}</span>
            <button type="button" aria-label="Increase quantity" @click="qty += 1">+</button>
          </div>
          <button
            class="btn btn__outline product-page__wishlist"
            :class="{ 'product-page__wishlist-active': inWishlist }"
            type="button"
            @click="wishlist.toggle({ ...product, color: activeColor?.label })"
          >
            <img :src="inWishlist ? '/icons/heart-filled.svg' : '/icons/heart.svg'" alt="" />
            Wishlist
          </button>
        </div>
        <button class="btn btn__primary" type="button" @click="addToCart">Add to Cart</button>

        <div class="product-page__meta">
          <div v-if="product.sku"><span>SKU</span><span>{{ product.sku }}</span></div>
          <div v-if="product.categories"><span>CATEGORY</span><span>{{ product.categories }}</span></div>
        </div>
      </div>
    </div>

    <ProductTabsComponent :product="product" :reviews="demoReviews" />

    <section class="section" v-if="related.length">
      <div class="new-arrivals__header">
        <h2 class="new-arrivals__title">You might also like</h2>
      </div>
      <div class="shop-catalog__grid" style="--shop-columns: 4">
        <ProductCardComponent v-for="item in related" :key="item.id" :product="item" />
      </div>
    </section>

    <NewsletterView />
  </main>
  <main class="container" v-else>
    <p class="cart-page__empty">Product not found.</p>
  </main>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { demoProducts, demoCategories, demoReviews } from '@/data/demo.js'
import { useCartStore } from '@/store/modules/cart.js'
import { useWishlistStore } from '@/store/modules/wishlist.js'
import ProductGalleryComponent from '@/components/Product/ProductGalleryComponent.vue'
import ProductCountdownComponent from '@/components/Product/ProductCountdownComponent.vue'
import ProductTabsComponent from '@/components/Product/ProductTabsComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import NewsletterView from '@/components/Home/NewsletterView.vue'

const route = useRoute();
const cart = useCartStore();
const wishlist = useWishlistStore();

const product = computed(() => demoProducts.find(item => item.id === route.params.id) ?? demoProducts[0]);
const category = computed(() => demoCategories.find(item => item.id === product.value?.categoryId));
const related = computed(() =>
  demoProducts.filter(item => item.categoryId === product.value?.categoryId && item.id !== product.value?.id).slice(0, 4)
);

const qty = ref(1);
const activeColorId = ref(product.value?.colors?.[0]?.id ?? null);
watch(product, (next) => {
  qty.value = 1;
  activeColorId.value = next?.colors?.[0]?.id ?? null;
});

const activeColor = computed(() => product.value?.colors?.find(color => color.id === activeColorId.value));
const price = computed(() => Number(product.value?.price ?? 0));
const discount = computed(() => {
  const { price: current, oldPrice } = product.value ?? {};
  if (!oldPrice || !current || Number(oldPrice) <= Number(current)) return null;
  return Math.round((1 - Number(current) / Number(oldPrice)) * 100);
});
const inWishlist = computed(() => wishlist.has(product.value?.id));

const addToCart = () => {
  cart.add({ ...product.value, color: activeColor.value?.label }, qty.value);
  cart.open();
};
</script>
