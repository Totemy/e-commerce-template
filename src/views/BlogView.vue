<template>
  <main>
    <section class="page-banner">
      <div class="page-banner__wrapper">
        <div class="shop-banner__crumbs">
          <router-link to="/">Home</router-link>
          <img src="/icons/chevron-right.svg" alt="" />
          <span>Blog</span>
        </div>
        <h1>Our Blog</h1>
        <h3>Home ideas and design inspiration</h3>
      </div>
    </section>

    <div class="container">
      <div class="blog-page">
        <div class="shop-catalog__toolbar">
          <div class="blog-page__tabs">
            <button class="blog-page__tab blog-page__tab-active" type="button">All Blog</button>
            <button class="blog-page__tab" type="button">Featured</button>
          </div>
          <div class="shop-catalog__controls">
            <button class="btn shop-catalog__sort" type="button">
              Sort by
              <img src="/icons/chevron-down.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="blog-section__content blog-page__grid">
          <router-link class="blog-section__card" v-for="post in visiblePosts" :key="post.id" :to="`/blog/${post.id}`">
            <div class="blog-section__img">
              <img :src="post.image" :alt="post.title" />
            </div>
            <div class="blog-section__text">
              <h4>{{ post.title }}</h4>
              <span class="blog-page__date">{{ post.date }}</span>
            </div>
          </router-link>
        </div>

        <div class="shop-catalog__more" v-if="visiblePosts.length < demoBlogPosts.length">
          <button class="btn btn__outline" @click="limit += 6">Show more</button>
        </div>
      </div>
    </div>

    <NewsletterView />
  </main>
</template>
<script setup>
import { computed, ref } from 'vue'
import { demoBlogPosts } from '@/data/demo.js'
import NewsletterView from '@/components/Home/NewsletterView.vue'

const limit = ref(6);
const visiblePosts = computed(() => demoBlogPosts.slice(0, limit.value));
</script>
