<template>
  <section class="container">
    <nav class="navbar">
      <div class="navbar__logo">
        3legant<span class="color-n4">.</span>
      </div>
      <div class="navbar__links">
        <router-link class="navbar__link" to="/" :class="{ 'navbar__link-active': activeRoute === '/' }" >Home</router-link>
        <router-link class="navbar__link" to="/catalog" :class="{ 'navbar__link-active': activeRoute === '/catalog' }">Shop</router-link>
        <router-link class="navbar__link" to="/catalog" :class="{ 'navbar__link-active': activeRoute === '/catalog' }" >Product</router-link>
        <router-link class="navbar__link" to="/catalog" :class="{ 'navbar__link-active': activeRoute === '/catalog' }">Contact Us</router-link>
        <router-link class="navbar__link" to="/admin" :class="{ 'navbar__link-active': activeRoute === '/admin' }" >Admin</router-link>
      </div>
     <div class="navbar__buttons">
          <button class="btn btn__nav"> <img src="/icons/search.svg" alt="search" /> </button>
          <button class="btn btn__nav"><img src="/icons/account.svg" alt="account" /> </button>
          <button class="btn btn__nav"> <img src="/icons/bag.svg" alt="shop-bag" /> </button>
     </div>
    </nav>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeRoute: '', // Initialize active route
      openBar: false
    };
  },
  watch: {
    '$route'(to) {
      this.activeRoute = to.path;
      this.openBar = false;
    }
  }
}
</script>