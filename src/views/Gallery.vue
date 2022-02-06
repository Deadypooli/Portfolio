<template>
	<Header/>
	<Display
	:selectedImage="selectedImage"
	v-if="clicked"
	@clicked="closeModal"/>
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
		<div v-if="showImg" class="gallery-grid">
			<img
			class="grid-img"
			v-for="key in images"
			:src="key"
			:key="key"
			v-on:click="openModal(key)">
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
		}
	},
	beforeMount () {
		this.images = this.importAll(require.context('@/assets', false , /\.(png|jpe?g)$/));

	},
	mounted () {
		let img = new Image();
		for (let i in this.images) {
			img.onload = () => {
				this.showImg = true;
			}
			img.src = this.images[i];
		}
	},
	methods: {
		openModal (key) {
			this.selectedImage = key;
			this.clicked = !this.clicked;
			document.body.classList.add('noscroll');
		},
		importAll (r) {
			let images = [];
			r.keys().map((item, index) => { images[index] = r(item); });
			return images;
		},
	}
}

</script>
