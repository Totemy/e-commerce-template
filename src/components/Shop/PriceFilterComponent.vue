<template>
  <div>
    <div
    v-for="range in priceRange"
    :key="range.label"
    >
      <label>
        {{ range.label }}
        <input
          type="checkbox"
          :checked="activeRange === range"
          @change="setActiveRange(range)"
        />
      </label>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue';

const priceRange = ref([
  {label: 'All', min: null, max: null},
  {label: '0 - 99.9', min: 0, max: 99},
  {label: '100-199', min: 100, max: 199},
  {label: '200-299', min: 200, max: 299},
  {label: '300-399', min: 300, max: 399},
  {label: '400+', min: 400, max: null},
]);
const activeRange = ref(priceRange.value[0]);

const setActiveRange = (range) =>{
  activeRange.value = range;
}
</script>