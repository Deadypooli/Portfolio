<template>
	<header class="header">
		<a href="/" class="mobile-nav">
			<!-- <img src="../logo/logo.svg" class="header-svg"> -->
			N
		</a>
		<div
		class="mobile-nav"
		@click="toggleMenu">
			<img src="../logo/bars.svg" class="header-svg">
		</div>
		<div
		:class="{'hidden-nav': menuHidden}"
		class="nav">
			<div class="pages">
				<div class="logo-desktop">
					<a href="/">
						<!-- <img src="../logo/logo.svg" class="header-svg"> -->
						N
					</a>
				</div>
				<div class="page-link">
					<a href="/conceptArt">
						Concept Art
					</a>
				</div>
				<div class="page-link">
					<a href="/illustrations">
						Illustrations
					</a>
				</div>
				<div class="page-link">
					<a href="/models">
						Models
					</a>
				</div>
				<!-- <div class="dropdown"> -->
					<!-- <div class="dropdown-btn">
						Projects
					</div> -->
					<div class="dropdown-items">
						<a href="/bananaDrama">
							Banana Drama
						</a>
					<!-- </div> -->
				</div>
			</div>
			<div class="info">
				<a class="page-link" href="/neofyInfo">
					Neofy Info
				</a>
				<a class="page-link" href="https://www.instagram.com/ne0fy/" target="_blank">
					<img src="../logo/insta.svg" class="header-svg">
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
		
	}
  }
}
</script>
