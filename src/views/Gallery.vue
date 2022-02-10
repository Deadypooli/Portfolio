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
				v-for="i in 8"
				:key="i">
			</div>
		</div>
		<div
			ref="galleryGrid"
			class="gallery-grid gallery-hide">
			<img
			class="grid-img"
			v-for="key in images"
			:src="key"
			:key="key"
			@load="imgLoaded"
			v-on:click="toggleModal(key)">
		</div>
	</section>
</template>

<script>
import Header from '@/components/Header.vue'
import Display from '@/components/Display.vue'

export default {
	components: { Header, Display },
  
	name: 'Gallery',
	data () {
		return {
			clicked: false,
			images: [],
			selectedImage: null,
			showImg: false,
			imgCount: 0,
		}
	},
	beforeMount () {
		this.images = this.importAll(require.context('@/assets', false , /\.(png|jpe?g)$/));
	},
	methods: {
		toggleModal (key) {
			this.selectedImage = key;
			this.clicked = !this.clicked;
			document.body.classList.add('noscroll');
		},
		importAll (r) {
			let images = [];
			r.keys().map((item, index) => { images[index] = r(item); });
			return images;
		},
		imgLoaded () {
			this.imgCount += 1;
			if (this.imgCount === this.images.length) {
				this.showImg = true;
				this.$refs.galleryGrid.classList.remove('gallery-hide');
			}
		}
	}
}

</script>
