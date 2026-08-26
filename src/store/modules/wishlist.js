import { defineStore } from 'pinia';

const STORAGE_KEY = '3legant.wishlist';

const read = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const write = (items) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    // Storage unavailable — ignore.
  }
};

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: read()
  }),
  actions: {
    has(id) {
      return this.items.some(item => item.id === id);
    },
    toggle(product) {
      if (this.has(product.id)) {
        this.remove(product.id);
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: Number(product.price ?? 0),
          image: product.image ?? (Array.isArray(product.images) ? product.images[0] : ''),
          color: product.color ?? null
        });
        write(this.items);
      }
    },
    remove(id) {
      this.items = this.items.filter(item => item.id !== id);
      write(this.items);
    }
  },
  getters: {
    count: (state) => state.items.length
  }
});
