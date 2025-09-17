<template>
  <Header />
    <video class="hero-vid" autoplay muted loop playsinline>
      <source :src="vid" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      vid: require('@/img/home/0000-1410.mp4'),
    };
  }
};
</script>
