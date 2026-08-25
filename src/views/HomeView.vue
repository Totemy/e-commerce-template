<template>
  <main>
    <div class="container">
      <CarouselComponent/>
    </div>
    <CategoryView v-reveal/>
    <div class="container">
      <NewArrivalsView v-reveal/>
      <Opportunities v-reveal/>
    </div>
    <BannerView v-reveal/>
    <div class="container">
      <BlogSectionView v-reveal/>
    </div>
    <NewsletterView v-reveal/>
  </main>
</template>
<script>

import CategoryView from '@/components/Home/CategoryView.vue'
import NewArrivalsView from '@/components/Home/NewArrivalsView.vue'
import Opportunities from '@/components/Home/OpportunitiesView.vue'
import BannerView from '@/components/Home/BannerView.vue'
import BlogSectionView from '@/components/Home/BlogSectionView.vue'
import CarouselComponent from '@/components/Home/CarouselComponent.vue'
import NewsletterView from '@/components/Home/NewsletterView.vue'

export default {
  components: { NewsletterView, BlogSectionView, BannerView, Opportunities, NewArrivalsView, CategoryView, CarouselComponent },
  data(){
    return{

    }
  }
}

</script>
