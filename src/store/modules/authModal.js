import { defineStore } from 'pinia';

export const useAuthModalStore = defineStore('authModal', {
  state: () => ({
    isOpen: false,
    mode: 'signin'
  }),
  actions: {
    open(mode = 'signin') {
      this.mode = mode;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    switchTo(mode) {
      this.mode = mode;
    }
  }
});
