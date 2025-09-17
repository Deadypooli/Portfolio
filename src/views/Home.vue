<template>
  <Header />
    <!-- <img :src="img" class="hero-img" /> -->
    <video class="hero-img" autoplay muted loop playsinline>
      <source :src="img" type="video/mp4">
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
      img: require('@/img/models/0000-1410.mp4'),
    };
  }
};
</script>
