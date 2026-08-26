<template>
  <section class="section">
    <div class="new-arrivals">
      <div class="new-arrivals__header">
        <h2 class="new-arrivals__title">
          New<br />Arrivals
        </h2>
        <button class="btn btn__primary-home only-desktop">More Products</button>
      </div>
      <div class="new-arrivals__track" ref="track" @scroll="onScroll">
        <div class="new-arrivals__item" v-for="product in products" :key="product.id">
          <ProductCardComponent :product="product" />
        </div>
      </div>
      <div class="new-arrivals__progress">
        <div class="new-arrivals__progress-thumb" :style="thumbStyle"></div>
      </div>
      <div class="new-arrivals__footer">
        <button class="btn btn__primary-home">More Products</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { collection, onSnapshot } from 'firebase/firestore'
import { database } from '@/firebase.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'

const items = ref([]);
const track = ref(null);
const scrollRatio = ref(0);
const visibleRatio = ref(0.25);

const fallbackProducts = [
  { id: 'loveseat-sofa', name: 'Loveseat Sofa', price: 199, oldPrice: 400, isNew: true, image: '/gallery/1.jpg' },
  { id: 'table-lamp', name: 'Table Lamp', price: 24.99, isNew: true, image: '/gallery/2.jpg' },
  { id: 'beige-table-lamp', name: 'Beige Table Lamp', price: 24.99, isNew: true, image: '/gallery/3.jpg' },
  { id: 'bamboo-basket', name: 'Bamboo basket', price: 24.99, isNew: true, image: '/gallery/4.jpg' },
  { id: 'toasted', name: 'Toasted', price: 224.99, isNew: true, image: '/gallery/1.jpg' }
];

let unsubscribeProducts = null;
const getProducts = () => {
  if (!database) return;
  const productsCollection = collection(database, 'products');
  unsubscribeProducts = onSnapshot(productsCollection, (querySnapshot) => {
    items.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
};

const products = computed(() => items.value.length ? items.value : fallbackProducts);
const thumbStyle = computed(() => ({
  width: `${visibleRatio.value * 100}%`,
  marginLeft: `${scrollRatio.value * (1 - visibleRatio.value) * 100}%`
}));

const onScroll = () => {
  const el = track.value;
  if (!el) return;
  const scrollable = el.scrollWidth - el.clientWidth;
  visibleRatio.value = el.clientWidth / el.scrollWidth;
  scrollRatio.value = scrollable > 0 ? el.scrollLeft / scrollable : 0;
};

onMounted(() => {
  getProducts();
  onScroll();
});
onUnmounted(() => {
  if (unsubscribeProducts) unsubscribeProducts();
});
</script>
