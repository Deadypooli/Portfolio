<template>
	<Header/>
	<Display
	:selectedImage="selectedImage"
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
			selectedImage: null
		}
	},
	beforeMount () {
		var splicer = Math.ceil(this.images.length / 3);
		this.splicedImages[0] = this.images.splice(-splicer);
		this.splicedImages[1] = this.images.splice(-splicer);
		this.splicedImages[2] = this.images;

	},
	methods: {
		toggleModal (key) {
			this.selectedImage = key;
			this.clicked = !this.clicked;
		}
	}
}

</script>
