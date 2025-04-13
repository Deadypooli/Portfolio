<template>
	<Header/>
	<Display
	:selectedImage="selectedImage"
	v-if="clicked"
	@clicked="toggleModal(key)"/>
    <section class="gallery-container">
		<div
			v-if="!showImg"
			class="gallery-grid">
			<div
				class="grid-placeholder"
				v-for="i in 4"
				:key="i">
			</div>
		</div>
		<div
			ref="galleryGrid"
			class="gallery-grid gallery-hide">
			<img
			class="grid-img"
			v-for="key in imgArray"
			:src="key"
			:key="key.url"
			@load="imgLoaded()"
			v-on:click="toggleModal(key)">
		</div>
	</section>
	<div ref="dropboxContainer"></div>
</template>

<script>
import Header from '@/components/Header.vue';
import Display from '@/components/Display.vue';

export default {
	components: { Header, Display },
  
	name: 'Gallery',
	data () {
		return {
			clicked: false,
			selectedImage: null,
			showImg: false,
			imgCount: 0,
			imgArray: [
				require ('@/img/concepts/fir.png'),
				require ('@/img/concepts/lorikeet.png'),
				require ('@/img/concepts/penguin.png'),
				require ('@/img/concepts/red-spider.png'),
				require ('@/img/concepts/Rose.png'),
			]
		}
	},
	methods: {
		toggleModal (key) {			
			this.selectedImage = key;
			this.clicked = !this.clicked;
			document.body.classList.add('noscroll');
		},
		imgLoaded () {
			this.imgCount += 1;
			if (this.imgCount === this.imgArray.length) {
				this.showImg = true;
				this.$refs.galleryGrid.classList.remove('gallery-hide');
			}
		},
	}
}

</script>
