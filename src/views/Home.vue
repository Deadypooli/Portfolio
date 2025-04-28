<template>
  <Header />
    <img :src="img" class="hero-img" />
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
  }
};
</script>
