<template>
  <div class="product-tabs">
    <div class="product-tabs__nav">
      <button
        class="product-tabs__tab"
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ 'product-tabs__tab-active': active === tab.id }"
        @click="active = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="product-tabs__panel" v-if="active === 'info'">
      <h3>Details</h3>
      <p>{{ product.details }}</p>
      <h3 v-if="product.packaging">Packaging</h3>
      <p v-if="product.packaging">
        Width: {{ product.packaging.width }} · Height: {{ product.packaging.height }} · Length: {{ product.packaging.length }}<br />
        Weight: {{ product.packaging.weight }} · Package(s): {{ product.packaging.packages }}
      </p>
    </div>

    <div class="product-tabs__panel" v-else-if="active === 'questions'">
      <p>No questions yet. Reach out from the <router-link to="/contact">Contact page</router-link> and we will get back to you.</p>
    </div>

    <div class="product-tabs__panel product-tabs__panel-reviews" v-else>
      <div class="product-reviews__head">
        <div>
          <h2>Customer Reviews</h2>
          <span class="product-reviews__product">{{ product.name }}</span>
        </div>
        <button class="btn btn__outline" type="button">Write Review</button>
      </div>

      <div class="product-reviews__toolbar">
        <h3>{{ reviews.length }} Reviews</h3>
        <span class="product-reviews__sort">Newest</span>
      </div>

      <article class="product-reviews__item" v-for="review in reviews" :key="review.id">
        <div class="product-reviews__avatar">{{ initials(review.name) }}</div>
        <div class="product-reviews__body">
          <h4>{{ review.name }}</h4>
          <div class="product-card__rating">
            <img
              v-for="star in 5"
              :key="star"
              :class="{ 'product-card__rating-off': star > review.rating }"
              src="/icons/star.svg"
              alt=""
            />
          </div>
          <p>{{ review.text }}</p>
          <span class="product-reviews__date">{{ review.date }}</span>
        </div>
      </article>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  product: { type: Object, required: true },
  reviews: { type: Array, default: () => [] }
});

const tabs = [
  { id: 'info', label: 'Additional Info' },
  { id: 'questions', label: 'Questions' },
  { id: 'reviews', label: 'Reviews' }
];
const active = ref('reviews');

const initials = (name) => name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase();
</script>
