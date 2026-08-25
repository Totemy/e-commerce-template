import {defineStore} from 'pinia';
import { shippingOptions } from '@/data/demo.js';

const STORAGE_KEY = '3legant.cart';
const ORDER_KEY = '3legant.lastOrder';
const SHIPPING_KEY = '3legant.shipping';

// localStorage може бути недоступний (приватний режим, вимкнені куки) —
// тоді кошик просто працює в межах сесії.
const read = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
};

const write = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Немає де зберігати — не критично.
  }
};

export const useCartStore = defineStore('cart', {
  state:() => ({
    items: Array.isArray(read(STORAGE_KEY, [])) ? read(STORAGE_KEY, []) : [],
    lastOrder: read(ORDER_KEY, null),
    shippingId: read(SHIPPING_KEY, shippingOptions[0].id),
    isOpen: false,
  }),
  actions:{
    save(){
      write(STORAGE_KEY, this.items);
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
    // Оформлення замовлення: знімок кошика лишається, щоб сторінка
    // Order Complete могла його показати навіть після перезавантаження.
    placeOrder(){
      if (this.isEmpty) return null;
      const order = {
        number: Math.floor(Math.random() * 900000 + 100000),
        date: new Date().toISOString(),
        items: this.items.map(item => ({ ...item })),
        subtotal: this.subtotal,
        shipping: this.shippingCost,
        total: this.total
      };
      this.lastOrder = order;
      write(ORDER_KEY, order);
      this.clear();
      return order;
    },
    clear(){
      this.items = [];
      this.save();
    },
    setShipping(id){
      this.shippingId = id;
      write(SHIPPING_KEY, id);
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
    shippingOption: (state) => shippingOptions.find(option => option.id === state.shippingId) ?? shippingOptions[0],
    shippingCost(){
      return this.shippingOption.price;
    },
    total(){
      return this.subtotal + this.shippingCost;
    },
  }
})
