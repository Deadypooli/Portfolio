<template>
  <Header />
  <div class="hero-container">
    <img
    :src="img"
    @load="imgLoaded()"
    ref="heroImg"
    class="hero-img hide" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { Dropbox } from 'dropbox';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      img: null,
    };
  },
  beforeMount () {
    this.getImage();
  },
  methods: {
    getImage () {
      var dbx = new Dropbox({ accessToken: process.env.DROPBOX_TOKEN });
      var that = this;
      dbx.sharingListSharedLinks().then(function (response) {
        that.img = response.result.links[0].url.slice(0, -1) + '1';
      });
    },
    imgLoaded () {
      this.$refs.heroImg.classList.remove('hide');
    }
  },
};
</script>
