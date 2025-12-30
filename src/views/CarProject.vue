<template>
  <Header />
  <img :src="imgFront" class="car-image">
  <img :src="img" class="car-image">
  <img :src="imgSide" class="car-image">
  <img :src="imgBack" class="car-image">
  <img :src="imgTop" class="car-image">
  <!-- <div class="video-container">
    <div class="video-text">
      <h1>
        SOON
      </h1>
    </div>
    <video class="hero-video" autoplay muted loop playsinline>
      <source :src="vid" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="car-container">
    <div class="car-text">
      <h2>
        Arriving soon
      </h2>
    </div>
    <img :src="img">
  </div> -->
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Untitled',
  components: {
    Header,
  },
  data() {
    return {
      // vid: require('@/img/car/0000-1410.mp4'),
      img: require('@/img/car/Car.webp'),
      imgFront: require('@/img/car/Car-front.webp'),
      imgBack: require('@/img/car/Car-back.webp'),
      imgSide: require('@/img/car/Car-side.webp'),
      imgTop: require('@/img/car/Car-top.webp'),
    };
  }
};
</script>
