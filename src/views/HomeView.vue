<template>
  <main >
    <div class="container">
      <div class="home">
        <div>
          Carousel with images
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

    </div>
  </main>
</template>
<script>

import CategoryView from '@/components/Home/CategoryView.vue'
import NewArrivalsView from '@/components/Home/NewArrivalsView.vue'
import Opportunities from '@/components/Home/OpportunitiesView.vue'
import BannerView from '@/components/Home/BannerView.vue'

export default {
  components: { BannerView, Opportunities, NewArrivalsView, CategoryView },
  data(){
    return{

    }
  }
}

</script>