<template>
  <div>
    <h3 class="filter__group-title">Price</h3>
    <div class="filter__list">
      <label
        class="filter__row"
        v-for="range in priceRanges"
        :key="range.label"
      >
        {{ range.label }}
        <input
          type="checkbox"
          :checked="store.activeRange.label === range.label"
          @change="store.setRange(range)"
        />
      </label>
    </div>
  </div>
</template>
<script setup>
import { priceRanges } from '@/data/demo.js'
import { useFiltersStore } from '@/store/modules/filters.js'

const store = useFiltersStore();
</script>
