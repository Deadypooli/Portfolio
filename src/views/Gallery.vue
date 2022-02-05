<template>
	<Header/>
	<Display
	:selectedImage="selectedImage"
	:images="images"
	v-if="clicked"
	@clicked="toggleModal"/>
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
			<div
			class="grid-img"
			v-for="key in images"
			:style="{ backgroundImage: 'url(' + key + ')'}"
			:key="key"
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
			images: [],
			splicedImages: [],
			selectedImage: null,
			showImg: false,
		}
	},
	beforeMount () {
		this.images = this.importAll(require.context('@/assets', false , /\.(png|jpe?g)$/));
		var imageArray = [...this.images];
		this.spliceImages (imageArray);

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
		spliceImages (imageArray) {
			var splicer = Math.ceil(imageArray.length / 3);
			this.splicedImages[0] = imageArray.splice(-splicer);
			this.splicedImages[1] = imageArray.splice(-splicer);
			this.splicedImages[2] = imageArray;
		},
		toggleModal (key) {
			this.selectedImage = key;
			this.clicked = !this.clicked;
			document.body.classList.add('body-noscroll');
		},
		importAll (r) {
			let images = [];
			r.keys().map((item, index) => { images[index] = r(item); });
			return images;
		},
	}
}

</script>
