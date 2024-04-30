<template>
<section>
  <h2>Items</h2>
  <div>

  </div>
</section>
</template>
<script>

export default {
  data(){
    return{
      Products: [],
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts(){

    }
  }
}
</script>