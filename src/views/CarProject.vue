<template>
  <Header />
  <img :src="img" class="car-image">
  <img :src="imgFront" class="car-image">
  <img :src="imgSide" class="car-image">
  <img :src="imgBack" class="car-image">
  <img :src="imgTop" class="car-image">
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Proto0',
  components: {
    Header,
  },
  data() {
    return {
      img: require('@/img/car/new-car-45.webp'),
      imgFront: require('@/img/car/new-car-front.webp'),
      imgBack: require('@/img/car/new-car-back.webp'),
      imgSide: require('@/img/car/new-car-side.webp'),
      imgTop: require('@/img/car/new-car-top.webp'),
    };
  }
};
</script>
