<template>
  <Header />
  <div class="hero-container">
    <img :src="img" @load="imgLoaded()" ref="heroImg" class="hero-img hide" />
  </div>
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
      img: require('@/img/illustrations/fall.jpg'),
    };
  },
  methods: {
    imgLoaded() {
      this.$refs.heroImg.classList.remove('hide');
    }
  },
};
</script>
