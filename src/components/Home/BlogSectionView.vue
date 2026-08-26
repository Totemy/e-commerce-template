<template>
  <section class="section">
    <div class="blog-section">
      <div class="blog-section__header">
        <h2>Articles</h2>
        <router-link class="btn btn__primary-home" to="/blog">More Articles</router-link>
      </div>
      <div class="blog-section__content">
        <router-link class="blog-section__card" v-for="post in posts" :key="post.id" :to="`/blog/${post.id}`">
          <div class="blog-section__img">
            <img :src="post.image" :alt="post.title"/>
          </div>
          <div class="blog-section__text">
            <h4>{{ post.title }}</h4>
            <span class="btn btn__primary-home">Read More</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
import { demoBlogPosts } from '@/data/demo.js'

const posts = demoBlogPosts;
</script>
