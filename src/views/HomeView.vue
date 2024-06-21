<template>
  <main >
    <div class="container">
      <div class="home">
        <div>
          <CarouselComponent/>
        </div>
        <div>
          <CategoryView/>
        </div>
        <div>
          <NewArrivalsView/>
        </div>
        <div>
          <Opportunities/>
        </div>
      </div>
    </div>
    <div>
      <BannerView/>
    </div>
    <div class="container">
      <BlogSectionView/>
    </div>
  </main>
</template>
<script>

import CategoryView from '@/components/Home/CategoryView.vue'
import NewArrivalsView from '@/components/Home/NewArrivalsView.vue'
import Opportunities from '@/components/Home/OpportunitiesView.vue'
import BannerView from '@/components/Home/BannerView.vue'
import BlogSectionView from '@/components/Home/BlogSectionView.vue'
import CarouselComponent from '@/components/Home/CarouselComponent.vue'

export default {
  components: { BlogSectionView, BannerView, Opportunities, NewArrivalsView, CategoryView, CarouselComponent },
  data(){
    return{

    }
  }
}

</script>