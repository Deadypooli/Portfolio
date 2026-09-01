<template>
  <Header />
  <div class="munich-hero" :style="{backgroundImage: 'url(' + img + ')' }">
        <div class="munich-text">
            <h1>
                Magical Munich
            </h1>
            <p class="munich-text-desktop">
                Real-world puzzle quest in Munich · by LiNo Urban Architects · Questo
            </p>
            <p class="munich-text-mobile">
                Real-world puzzle quest in Munich <br> by LiNo Urban Architects <br> Questo
            </p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'MagicMunich',
  components: {
    Header,
  },
  data() {
    return {
      img: require('@/img/magicMunich/MagicMunich.webp')
    };
  }
};
</script>
