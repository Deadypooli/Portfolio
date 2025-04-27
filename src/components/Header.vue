<template>
	<header class="header">
		
		<div 
		class="header-burger"
		@click="toggleMenu">
			<img src="../logo/bars.svg" class="header-icon insta-icon">
		</div>
		<div
		:class="{'hidden-menu': menuHidden}"
		class="header-items">
			<div class="pages">
				<div class="header-item">
					<a href="/">
						<img src="../logo/logo.svg" class="header-icon insta-icon">
					</a>
				</div>
				<div class="header-item">
					<a href="/conceptArt">
						Concept Art
					</a>
				</div>
				<div class="header-item">
					<a href="/illustrations">
						Illustrations
					</a>
				</div>
				<div class="header-item">
					<a href="/models">
						Models
					</a>
				</div>
				<div class="dropdown header-item">
					<div class="dropdown-btn">
						Projects
					</div>
					<div class="dropdown-items">
						<a href="/bananaDrama">
							Banana Drama
						</a>
						<a href="/bananaDrama">
							Banana Drama
						</a>
						<a href="/bananaDrama">
							Banana Drama
						</a>
					</div>
				</div>
			</div>
			<div class="info">
				<div class="header-item">
					<a href="/neofyInfo">
						Neofy Info
					</a>
				</div>
				<div class="header-item">
					<a href="https://www.instagram.com/ne0fy/" target="_blank">
						<img src="../logo/insta.svg" class="header-icon insta-icon">
					</a>
				</div>
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
