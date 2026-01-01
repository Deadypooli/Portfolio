<template>
  <Header />
  <img :src="imgFront" class="car-image">
  <img :src="img" class="car-image">
  <img :src="imgSide" class="car-image">
  <img :src="imgBack" class="car-image">
  <img :src="imgTop" class="car-image">
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
      img: require('@/img/car/Car.webp'),
      imgFront: require('@/img/car/Car-front.webp'),
      imgBack: require('@/img/car/Car-back.webp'),
      imgSide: require('@/img/car/Car-side.webp'),
      imgTop: require('@/img/car/Car-top.webp'),
    };
  }
};
</script>
