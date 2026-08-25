<template>
  <aside class="filter">
    <div class="filter__toggle">
      <button class="btn filter__heading" type="button" @click="open = !open">
        <img src="/icons/filter.svg" alt="" />
        Filter
      </button>
    </div>
    <div class="filter__body" v-if="open || isDesktop">
      <div>
        <h3 class="filter__group-title">Categories</h3>
        <div class="filter__list filter__list-scroll">
          <button
            class="filter__item"
            :class="{ 'filter__item-active': filters.activeCategoryId === null }"
            @click="filters.setCategory(null)"
          >
            All Rooms
          </button>
          <button
            class="filter__item"
            v-for="category in categories"
            :key="category.id"
            :class="{ 'filter__item-active': filters.activeCategoryId === category.id }"
            @click="filters.setCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      <PriceFilterComponent/>
    </div>
  </aside>
</template>
<script setup>
import { useCategoriesStore } from '@/store/modules/categories.js'
import { useFiltersStore } from '@/store/modules/filters.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import PriceFilterComponent from '@/components/Shop/PriceFilterComponent.vue'

const store = useCategoriesStore();
const filters = useFiltersStore();
const open = ref(false);
// На десктопі панель завжди розкрита, на мобільному — за кнопкою Filter.
const isDesktop = ref(true);

const updateViewport = () => {
  isDesktop.value = window.innerWidth > 767;
};

onMounted(() => {
  store.fetchCategories();
  updateViewport();
  window.addEventListener('resize', updateViewport);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateViewport);
});

const categories = computed(() => store.allCategories);
</script>
