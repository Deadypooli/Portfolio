<template>
	<header class="header">
		<a href="/" class="mobile-nav">
			Neofy
		</a>
		<div
		class="mobile-nav"
		@click="toggleMenu">
			<img src="../logo/white-bars.svg" class="header-svg">
		</div>
		<div
		:class="{'hidden-nav': menuHidden}"
		class="nav">
			<div class="pages">
				<div class="logo-desktop">
					<a href="/">
						Neofy
					</a>
				</div>
				<div class="page-link">
					<a href="/bananaDrama">
						Banana Drama
					</a>
				</div>
				<div class="page-link">
					<a href="/car-project">
						Car Project
					</a>
				</div>
			</div>
			<div class="info">
				<div class="page-link">
					<a href="/about">
						About Me
					</a>
				</div>
				<a class="page-link" href="https://www.artstation.com/deadypooli" target="_blank">
					<img src="../logo/white-artstation.svg" class="header-svg">
				</a>
				<a class="page-link" href="https://www.instagram.com/ne0fy/" target="_blank">
					<img src="../logo/white-insta.svg" class="header-svg">
				</a>
			</div>
		</div>
	</header>
</template>

<script>

export default {
  name: 'Header',
  data () {
	return {
		menuHidden: false,
	}
  },
  methods: {
	toggleMenu () {
		this.menuHidden = !this.menuHidden;
		document.body.classList.toggle('noscroll');
	}
  }
}
</script>
