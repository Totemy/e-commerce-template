import {defineStore} from 'pinia';

const STORAGE_KEY = '3legant.cart';

// localStorage може бути недоступний (приватний режим, вимкнені куки) —
// тоді кошик просто працює в межах сесії.
const readItems = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

export const useCartStore = defineStore('cart', {
  state:() => ({
    items: readItems(),
    isOpen: false,
  }),
  actions:{
    save(){
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
      } catch (error) {
        // Немає де зберігати — не критично.
      }
    },
    add(product, qty = 1){
      const existing = this.items.find(item => item.id === product.id);
      if (existing) {
        existing.qty += qty;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: Number(product.price ?? 0),
          image: product.image ?? (Array.isArray(product.images) ? product.images[0] : ''),
          color: product.color ?? null,
          qty
        });
      }
      this.save();
    },
    setQty(id, qty){
      const item = this.items.find(item => item.id === id);
      if (!item) return;
      if (qty < 1) {
        this.remove(id);
        return;
      }
      item.qty = qty;
      this.save();
    },
    increment(id){
      const item = this.items.find(item => item.id === id);
      if (item) this.setQty(id, item.qty + 1);
    },
    decrement(id){
      const item = this.items.find(item => item.id === id);
      if (item) this.setQty(id, item.qty - 1);
    },
    remove(id){
      this.items = this.items.filter(item => item.id !== id);
      this.save();
    },
    clear(){
      this.items = [];
      this.save();
    },
    open(){
      this.isOpen = true;
    },
    close(){
      this.isOpen = false;
    },
    toggle(){
      this.isOpen = !this.isOpen;
    }
  },
  getters:{
    count: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    subtotal: (state) => state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
    isEmpty: (state) => state.items.length === 0,
  }
})
