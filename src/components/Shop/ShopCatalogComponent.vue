<template>
  <section class="shop-catalog">
    <div class="shop-catalog__toolbar">
      <h2 class="shop-catalog__title">{{ activeCategoryName }}</h2>
      <div class="shop-catalog__controls">
        <button class="btn shop-catalog__sort" type="button">
          Sort by
          <img src="/icons/chevron-down.svg" alt="" />
        </button>
        <div class="shop-catalog__views">
          <button
            class="btn shop-catalog__view"
            v-for="mode in viewModes"
            :key="mode.id"
            :class="[
              { 'shop-catalog__view-active': mode.id === activeMode.id },
              { 'only-desktop': mode.desktopOnly }
            ]"
            @click="activeMode = mode"
          >
            <img :src="`/icons/${mode.icon}.svg`" :alt="mode.id" />
          </button>
        </div>
      </div>
    </div>

    <div
      class="shop-catalog__grid"
      :class="{ 'shop-catalog__grid-list': activeMode.list }"
      :style="{ '--shop-columns': activeMode.columns }"
    >
      <ProductCardComponent
        v-for="product in visibleProducts"
        :key="product.id"
        :product="product"
        :list="activeMode.list"
      />
    </div>

    <p class="shop-catalog__empty" v-if="!filteredProducts.length">
      Немає товарів за вибраними фільтрами.
    </p>

    <div class="shop-catalog__more" v-if="visibleProducts.length < filteredProducts.length">
      <button class="btn btn__outline" @click="limit += pageSize">Show more</button>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import { useProductsStore } from '@/store/modules/products.js'
import { useCategoriesStore } from '@/store/modules/categories.js'
import { useFiltersStore } from '@/store/modules/filters.js'

const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();
const filters = useFiltersStore();

const pageSize = 9;
const limit = ref(pageSize);

const viewModes = [
  { id: 'grid-3', icon: 'view-grid-3', columns: 3, list: false, desktopOnly: true },
  { id: 'grid-2', icon: 'view-grid-2', columns: 2, list: false, desktopOnly: true },
  { id: 'cols', icon: 'view-cols', columns: 2, list: false, desktopOnly: false },
  { id: 'list', icon: 'view-list', columns: 1, list: true, desktopOnly: false }
];
const activeMode = ref(viewModes[0]);

const filteredProducts = computed(() => productsStore.allProducts.filter(filters.matches));
const visibleProducts = computed(() => filteredProducts.value.slice(0, limit.value));
const activeCategoryName = computed(() => {
  const active = categoriesStore.allCategories.find(category => category.id === filters.activeCategoryId);
  return active ? active.name : 'All Rooms';
});

onMounted(() => {
  productsStore.fetchProducts();
  categoriesStore.fetchCategories();
});
</script>
