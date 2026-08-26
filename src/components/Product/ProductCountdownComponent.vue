<template>
  <div class="countdown">
    <p class="countdown__label">Offer expires in:</p>
    <div class="countdown__row">
      <div class="countdown__cell" v-for="unit in units" :key="unit.label">
        <span class="countdown__value">{{ unit.value }}</span>
        <span class="countdown__unit">{{ unit.label }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const DAY = 24 * 60 * 60 * 1000;
const target = Date.now() + 2 * DAY + 12 * 60 * 60 * 1000 + 45 * 60 * 1000 + 5 * 1000;

const remaining = ref(Math.max(target - Date.now(), 0));
let timer = null;

const pad = (n) => String(n).padStart(2, '0');
const units = ref([]);

const tick = () => {
  remaining.value = Math.max(target - Date.now(), 0);
  const totalSeconds = Math.floor(remaining.value / 1000);
  units.value = [
    { label: 'Days', value: pad(Math.floor(totalSeconds / 86400)) },
    { label: 'Hours', value: pad(Math.floor((totalSeconds % 86400) / 3600)) },
    { label: 'Minutes', value: pad(Math.floor((totalSeconds % 3600) / 60)) },
    { label: 'Seconds', value: pad(totalSeconds % 60) }
  ];
};

onMounted(() => {
  tick();
  timer = setInterval(tick, 1000);
});
onUnmounted(() => clearInterval(timer));
</script>
