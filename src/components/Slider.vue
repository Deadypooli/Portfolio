<template>
        <div
        class="slider-container"
        ref="container">
            <img 
            class="image-before slider-image"
            :src="imageArray[0]">
            <img 
            class="slider-image"
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
                <img src="../logo/bars.svg" class="model-svg">
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