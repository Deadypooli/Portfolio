<template>
  <Header />
  <div class="video-container">
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
  </div>
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
      vid: require('@/img/untitled/0000-1410.mp4'),
      img: require('@/img/untitled/car-image.jpg'),
    };
  }
};
</script>
