<template>
  <main class="container" v-if="post">
    <div class="product-page__crumbs">
      <router-link to="/">Home</router-link>
      <img src="/icons/chevron-right.svg" alt="" />
      <router-link to="/blog">Blog</router-link>
      <img src="/icons/chevron-right.svg" alt="" />
      <span>{{ post.title }}</span>
    </div>

    <article class="blog-post">
      <span class="blog-post__tag">{{ post.tag }}</span>
      <h1>{{ post.title }}</h1>
      <div class="blog-post__meta">
        <span><img src="/icons/user-circle.svg" alt="" />{{ post.author }}</span>
        <span><img src="/icons/calendar.svg" alt="" />{{ post.date }}</span>
      </div>

      <div class="blog-post__cover">
        <img :src="post.image" :alt="post.title" />
      </div>

      <div class="blog-post__body">
        <p>{{ post.excerpt }} Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project.</p>
        <h3>A calming space, built to last</h3>
        <p>Light and easy to move around, the pieces enchant for their sobriety, made to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
        <div class="blog-post__gallery">
          <img :src="secondaryImage" :alt="post.title" />
        </div>
        <h3>Storage with a calming effect</h3>
        <p>Clear your clutter for easy access, and let every room breathe. Small changes in how things are stored make the biggest difference to how a home feels day to day.</p>
      </div>
    </article>

    <section class="section" v-if="related.length">
      <div class="new-arrivals__header">
        <h2 class="new-arrivals__title">You might also like</h2>
      </div>
      <div class="blog-section__content">
        <router-link class="blog-section__card" v-for="item in related" :key="item.id" :to="`/blog/${item.id}`">
          <div class="blog-section__img">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="blog-section__text">
            <h4>{{ item.title }}</h4>
            <span class="blog-page__date">{{ item.date }}</span>
          </div>
        </router-link>
      </div>
    </section>

    <NewsletterView />
  </main>
  <main class="container" v-else>
    <p class="cart-page__empty">Article not found.</p>
  </main>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { demoBlogPosts } from '@/data/demo.js'
import NewsletterView from '@/components/Home/NewsletterView.vue'

const route = useRoute();

const post = computed(() => demoBlogPosts.find(item => item.id === route.params.id) ?? demoBlogPosts[0]);
const related = computed(() => demoBlogPosts.filter(item => item.id !== post.value?.id).slice(0, 3));
const secondaryImage = computed(() => {
  const others = demoBlogPosts.filter(item => item.id !== post.value?.id);
  return others[0]?.image ?? post.value?.image;
});
</script>
