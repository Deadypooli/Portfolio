<template>
    <div class="display-backdrop"
    ref="displayBackdrop"
    v-on:click.self="toggleModal">
        <!-- <div v-bind:style="{backgroundImage: 'url(' + prevImage + ')'}"
        @click="slideImage(0)"
        class="edge-img">
        </div>
        <img class="display-img"
        v-bind:src="displayImage"
        >
        <div v-bind:style="{backgroundImage: 'url(' + nextImage + ')'}"
        @click="slideImage(2)"
        class="edge-img">
        </div> -->
        <!-- <div class="scrolling-container"> -->
            <img class="display-img"
                v-bind:src="displayImage"
            >
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    props: ['selectedImage', 'images', 'splitImages'],
    data () {
        return {
            displayImage: this.selectedImage,
            imageArray: this.images,
            nextImage: null,
            prevImage: null
        }
    },
    beforeMount () {
        this.changeImage();
    },
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
            document.body.classList.remove('body-noscroll');
        },
        slideImage (slideBy) {
            var currentIndex = this.imageArray.findIndex(index => index === this.displayImage);
            if (currentIndex === (this.imageArray.length - 1) && !!slideBy == true) {
                this.displayImage = this.imageArray[0];
            } else if (currentIndex === 0 && !!slideBy == false) {
                this.displayImage = this.imageArray[this.imageArray.length - 1];
            } else {
                this.displayImage = this.imageArray[currentIndex + (slideBy - 1)];
            }
            this.changeImage();
        },
        changeImage () {
            var currentImageIndex = this.imageArray.findIndex(index => index === this.displayImage);
            this.nextImage = this.imageArray[currentImageIndex + 1];
            this.prevImage = this.imageArray[currentImageIndex - 1];
        }
    }
}
</script>