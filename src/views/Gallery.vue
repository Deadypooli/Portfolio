<template>
	<Header/>
	<Display
	:selectedImage="selectedImage"
	:images="images"
	v-if="clicked"
	@clicked="toggleModal"/>
    <section class="gallery-container">
		<div class="gallery-grid">
			<div class="gallery-column"
			v-for="imagelist in splicedImages"
			:key="imagelist">
				<img 
				class="gallery-img"
				v-for="key in imagelist" 
				:key="key" 
				v-bind:src="key" 
				v-on:click="toggleModal(key)">
			</div>
		</div>
		<div class="gallery-flex">
			<img
			class="flex-img"
			v-for="key in images"
			:key="key"
			v-bind:src="key"
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
			splicedImages: [],
			selectedImage: null,
		}
	},
	beforeMount () {
		this.images = this.importAll(require.context('@/assets', false , /\.(png|jpe?g)$/));
		var imageArray = [...this.images];
		var splicer = Math.ceil(imageArray.length / 3);
		this.splicedImages[0] = imageArray.splice(-splicer);
		this.splicedImages[1] = imageArray.splice(-splicer);
		this.splicedImages[2] = imageArray;

	},
	methods: {
		toggleModal (key) {
			this.selectedImage = key;
			this.clicked = !this.clicked;
			document.body.classList.add('body-noscroll');
		},
		importAll(r) {
			let images = [];
			r.keys().map((item, index) => { images[index] = r(item); });
			return images;
		}
	}
}

</script>
