<template>
	<Header/>
	<Display
	:selectedImage="selectedImage"
	:images="images"
	:splitImages="splitImages"
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
			images: [
				require('@/assets/christmas-jump.jpg'),
				require('@/assets/cat.jpg'),
				require('@/assets/punch.png'),
				require('@/assets/lola.png'),
				require('@/assets/catyatta.png'),
				require('@/assets/lily.png'),
				require('@/assets/tree.jpg'),
				require('@/assets/hotter.png'),
				require('@/assets/fall.png'),
				require('@/assets/mercy_gala.png'),
				require('@/assets/winfa.jpg'),
				require('@/assets/spiderverse.jpg'),
				require('@/assets/heart.jpg'),
			],
			splicedImages: [],
			splitImages: [],
			selectedImage: null,
		}
	},
	beforeMount () {
		var imageArray = [...this.images];
		var splicer = Math.ceil(imageArray.length / 3);
		this.splicedImages[0] = imageArray.splice(-splicer);
		this.splicedImages[1] = imageArray.splice(-splicer);
		this.splicedImages[2] = imageArray;

	},
	methods: {
		toggleModal (key) {
			var index = this.images.findIndex(index => index === key)
			this.splitImages[0] = this.images.slice(0,index);
			this.splitImages[1] = this.images.slice(index + 1);
			console.log(this.splitImages);
			this.selectedImage = key;
			this.clicked = !this.clicked;
			document.body.classList.add('body-noscroll');
		}
	}
}

</script>
