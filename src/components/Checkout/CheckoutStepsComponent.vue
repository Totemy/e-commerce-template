<template>
  <ol class="steps">
    <li
      class="steps__item"
      v-for="(step, index) in steps"
      :key="step"
      :class="{
        'steps__item-active': index === current,
        'steps__item-done': index < current
      }"
    >
      <span class="steps__row">
        <span class="steps__num">
          <img v-if="index < current" src="/icons/check.svg" alt="" />
          <template v-else>{{ index + 1 }}</template>
        </span>
        <span class="steps__label">{{ step }}</span>
      </span>
      <span class="steps__bar"></span>
    </li>
  </ol>
</template>
<script setup>
defineProps({
  current: {
    type: Number,
    default: 0
  }
});

const steps = ['Shopping cart', 'Checkout details', 'Order complete'];
</script>
