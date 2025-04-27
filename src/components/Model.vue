<template>
        <div
        class="container"
        ref="container">
        <div class="image-container">
            <img 
            class="image-before slider-image"
            :src="imageArray[0]">
            <img 
            class="image-after slider-image"
            :src="imageArray[1]">
            <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="slider"
            @input="(e) => slideImg(e)"
            />
            <div class="slider-button">
                <img src="../logo/bars.svg" class="header-icon insta-icon model-icon">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['imageArray'],
        methods: {
            slideImg (e) {
                this.$refs.container.style.setProperty('--position', `${e.target.value}%`);
            }
        }
    };
</script>