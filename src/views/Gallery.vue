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
			clicked: false
		}
	},
	methods: {
		toggleModal () {
			this.clicked = !this.clicked;
		}
	}
}

</script>
