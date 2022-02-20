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
			v-for="key in imgArray"
			:src="key.url"
			:key="key.url"
			@load="imgLoaded()"
			v-on:click="toggleModal(key.url)">
		</div>
	</section>
	<div ref="dropboxContainer"></div>
</template>

<script>
import Header from '@/components/Header.vue';
import Display from '@/components/Display.vue';
import { Dropbox } from 'dropbox';
import env from '/.env';

export default {
	components: { Header, Display },
  
	name: 'Gallery',
	data () {
		return {
			clicked: false,
			selectedImage: null,
			showImg: false,
			imgCount: 0,
			imgArray: null,
		}
	},
	beforeMount () {
		this.getImages();
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
		getImages() {
			var dbx = new Dropbox({ accessToken: env.DROPBOX_TOKEN });
			var that = this;
			dbx.filesListFolder({path: ''})
			.then(function(response) {
				var files = response.result.entries;
				dbx.sharingListSharedLinks()
					.then(function(response) {
						var links = response.result.links
						if (links.length !== files.length) {
							for (var file in files) {
								dbx.sharingCreateSharedLinkWithSettings({path: files[file].path_lower})
							}
						}

						that.imgArray = links;
						for (var link in that.imgArray) {
							that.imgArray[link].url = that.imgArray[link].url.slice(0, -1) + '1';
						}
					})
			})
		},
	}
}

</script>
