<template>
    <div class="display-backdrop"
    v-on:click.self="toggleModal">
            <img ref="beforeImg" :src="beforeImg" class="before-img" @click="setCurrentImg(beforeImg)">
            <img 
            ref="displayImg"
            class="display-img"
            :src="displayImg"
            @click="toggleModal()">
            <img ref="afterImg" :src="afterImg" class="after-img" @click="setCurrentImg(afterImg)">
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
            if (this.imgArray[this.imgArray.indexOf(currentImg)] > this.imgArray[this.imgArray.indexOf(this.displayImg)]) {
                // this.$refs.displayImg.classList.add('left-transition');
            } else if (this.imgArray[this.imgArray.indexOf(currentImg)] < this.imgArray[this.imgArray.indexOf(this.displayImg)]) {
                // this.$refs.displayImg.classList.add('right-transition');
            }
            // setTimeout(() => {
                this.displayImg = currentImg;
                this.beforeImg = this.imgArray[this.imgArray.indexOf(currentImg) - 1];
                this.afterImg = this.imgArray[this.imgArray.indexOf(currentImg) + 1];
                // this.$refs.displayImg.classList.remove('left-transition');
                // this.$refs.displayImg.classList.remove('right-transition');
            // }, 500);
        }
    }
}
</script>