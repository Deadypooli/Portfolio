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
	<div ref="dropboxContainer"></div>
</template>

<script>
import Header from '@/components/Header.vue'
import Display from '@/components/Display.vue'
import { Dropbox } from 'dropbox'

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
	mounted () {
		try {
			var token = require('/data.json').token;
		} catch (error) {
			console.log(error.message);
		}

		var dbx = new Dropbox({ accessToken: token });
		dbx.usersGetCurrentAccount()
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.error(error);
		});

		dbx.filesGetThumbnail({"path": "/jump.png"})
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log("got error:");
			console.log(error);
		});

		dbx.filesListFolder({path: '/deadypooli_portfolio'})
		.then(function(response) {
			console.log(response.entries);
		})
		.catch(function(error) {
			console.log('another error:');
			console.error(error);
		});

		console.log(dbx);
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
