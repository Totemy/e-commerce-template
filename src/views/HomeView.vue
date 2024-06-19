<template>
  <main >
    <div class="container">
      <div class="home">
        <div>
          Carousel with images
        </div>
        <div>

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
  </main>
</template>
<script>

import CategoryView from '@/components/Home/CategoryView.vue'
import NewArrivalsView from '@/components/Home/NewArrivalsView.vue'
import Opportunities from '@/components/Home/OpportunitiesView.vue'

export default {
  components: { Opportunities, NewArrivalsView, CategoryView },
  data(){
    return{

    }
  }
}

</script>