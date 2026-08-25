<template>
  <section class="section">
    <div class="blog-section">
      <div class="blog-section__header">
        <h2>Articles</h2>
        <button class="btn btn__primary-home">More Articles</button>
      </div>
      <div class="blog-section__content">
        <div class="blog-section__card" v-for="article in articles" :key="article.image">
          <div class="blog-section__img">
            <img :src="article.image" :alt="article.title"/>
          </div>
          <div class="blog-section__text">
            <h4>{{ article.title }}</h4>
            <button class="btn btn__primary-home">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const articles = [
  { title: '7 ways to decor your home', image: '/blog/1.jpg' },
  { title: 'Kitchen organization', image: '/blog/2.jpg' },
  { title: 'Decor your bedroom', image: '/blog/3.jpg' }
];
</script>
