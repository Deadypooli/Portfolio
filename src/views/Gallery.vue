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
			class="gallery-grid">
			<img
			class="grid-img"
			v-for="key in imgArray"
			:src="key.url"
			:key="key.url"
			v-on:click="toggleModal(key)">
		</div>
	</section>
	<div ref="dropboxContainer"></div>
</template>

<script>
import Header from '@/components/Header.vue'
import Display from '@/components/Display.vue'
import data from '/data.json'
import { Dropbox } from 'dropbox'

export default {
	components: { Header, Display },
  
	name: 'Gallery',
	data () {
		return {
			clicked: false,
			images: [],
			selectedImage: null,
			showImg: true,
			imgCount: 0,
			imgArray: null,
			files: null,
		}
	},
	beforeMount () {
		this.images = this.importAll(require.context('@/assets', false , /\.(png|jpe?g)$/));
		var dbx = new Dropbox({ accessToken: data.token });
		var that = this;
		dbx.filesListFolder({path: ''})
			.then(function(response) {
				that.files = response.result.entries;
				console.log('files:');
				for (var file in that.files) {
					dbx.sharingCreateSharedLinkWithSettings({path: that.files[file].path_lower})
				}
			})

		dbx.sharingListSharedLinks()
			.then(function(response) {
				that.imgArray = response.result.links
				for (var link in that.imgArray) {
					that.imgArray[link].url = that.imgArray[link].url.slice(0, -1) + '1';
				}
			})
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
