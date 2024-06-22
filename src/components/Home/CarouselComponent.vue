<template>
  <div class="slider">
    <div class="slides">
      <img v-for="(image, index) in images" :key="index" :src="'/gallery/' + image.url + '.jpg'" :class="{ active: index === currentIndex }">
    </div>
    <div class="slider__control">
      <button class="slider__button " @click="previousSlide">
        <img src="/gallery/Button.svg" alt="Next" />
      </button>
      <button class="slider__button slider__button__right " @click="nextSlide">
        <img src="/gallery/Button.svg" alt="Next" />
      </button>
    </div>
    <div class="slider-points">
      <span v-for="(image, index) in images" :key="index" @click="changeSlide(index)" :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: '1' },
        { url: '2' },
        { url: '3' },
        { url: '4' },
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopSlideShow() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    previousSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    changeSlide(index) {
      this.currentIndex = index;
      this.stopSlideShow();
      this.startSlideShow();
    }
  }
};
</script>