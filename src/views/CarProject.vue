<template>
  <Header />
  <img :src="imgFront" class="untitled-image">
  <img :src="img" class="untitled-image">
  <img :src="imgSide" class="untitled-image">
  <img :src="imgBack" class="untitled-image">
  <img :src="imgTop" class="untitled-image">
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
  <div class="untitled-container">
    <div class="untitled-text">
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
      // vid: require('@/img/untitled/0000-1410.mp4'),
      img: require('@/img/untitled/Car.webp'),
      imgFront: require('@/img/untitled/Car-front.webp'),
      imgBack: require('@/img/untitled/Car-back.webp'),
      imgSide: require('@/img/untitled/Car-side.webp'),
      imgTop: require('@/img/untitled/Car-top.webp'),
    };
  }
};
</script>
