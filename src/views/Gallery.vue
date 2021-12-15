<template>
	<Header/>
	<Display
	v-if="clicked"
	@clicked="toggleModal"/>
    <section class="gallery-container">
		<div class="gallery-grid">
			<div class="gallery-column">
				<img src="../assets/christmas-jump.jpg" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/mercy_gala.png" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/hotter.png" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/punch.png" class="gallery-img"
				v-on:click="toggleModal">
			</div>
			<div class="gallery-column">
				<img src="../assets/lola.png" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/winfa.jpg" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/lily.png" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/heart.jpg" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/spiderverse.jpg" class="gallery-img"
				v-on:click="toggleModal">
			</div>
			<div class="gallery-column">
				<img src="../assets/fall.png" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/catyatta.png" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/tree.jpg" class="gallery-img"
				v-on:click="toggleModal">
				<img src="../assets/cat.jpg" class="gallery-img"
				v-on:click="toggleModal">
			</div>
			<div class="gallery-column"
			v-for="imagelist in splicedImages"
			:key="imagelist">
				<img 
				class="gallery-img"
				v-for="key in imagelist" 
				:key="key" 
				v-bind:src="key" 
				v-on:click="toggleModal">
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
				"../assets/christmas-jump.jpg",
				"../assets/lola.png",
				"../assets/fall.png",
				"../assets/mercy_gala.png",
				"../assets/winfa.jpg",
				"../assets/catyatta.png",
				"../assets/hotter.png",
				"../assets/lily.png",
				"../assets/tree.jpg",
				"../assets/punch.png",
				"../assets/heart.jpg",
				"../assets/cat.jpg",
				"../assets/spiderverse.jpg"
			],
			splicedImages: []
		}
	},
	beforeMount () {
		var splicer = Math.ceil(this.images.length / 3);
		this.splicedImages[0] = this.images.splice(-splicer);
		this.splicedImages[1] = this.images.splice(-splicer);
		this.splicedImages[2] = this.images;

	},
	methods: {
		toggleModal () {
			this.clicked = !this.clicked;
		}
	}
}

</script>
