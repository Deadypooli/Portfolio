<template>
    <div class="display-backdrop"
    v-on:click.self="toggleModal"
    ref="carouselItems">
            <img :src="beforeImg" class="before-img" @click="setCurrentImg(beforeImg)">
            <img 
            class="display-img"
            :src="displayImg"
            @click="toggleModal()">
            <img :src="afterImg" class="after-img" @click="setCurrentImg(afterImg)">
    </div>
</template>

<script>
export default {
    props: ['selectedImage', 'imgArray'],
    data () {
        return {
            displayImg: null,
            beforeImg: null,
            afterImg: null,
        }
    },
    mounted () {
        this.setCurrentImg(this.selectedImage);
    },
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
            document.body.classList.remove('noscroll');
        },
        setCurrentImg (currentImg) {
            this.displayImg = currentImg;
            this.beforeImg = this.imgArray[this.imgArray.indexOf(currentImg) - 1];
            this.afterImg = this.imgArray[this.imgArray.indexOf(currentImg) + 1];
        }
    }
}
</script>