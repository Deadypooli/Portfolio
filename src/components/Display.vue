<template>
    <div class="display-container"
    v-on:click.self="toggleModal">
        <div class="display-backdrop"
        :style="{ 'transform': 'translateX(' + translateValue + ')'}"
        v-on:click.self="toggleModal"
        ref="backdrop">
            <img 
            v-for="(img, index) in imgArray"
            :key="index"
            ref="displayImages"
            class="display-img"
            :class="{center: index === currentIndex}"
            :src="img"
            @click="setCurrentImg(img)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['selectedImage', 'imgArray'],
    data () {
        return {
            displayImg: null,
            currentIndex: 0,
            imagesWidths: [],
            offsetValue: [],
            translateValue: 0,
        }
    },
    mounted () {
        for (let imgIndex = 0; imgIndex < this.imgArray.length; imgIndex++) {            
            this.imagesWidths.push(this.$refs['displayImages'][imgIndex].width);
        }
        this.setCurrentImg(this.selectedImage);
    },
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
            document.body.classList.remove('noscroll');
        },
        setCurrentImg (currentImg) {
            console.log(this.displayImg);
            if (this.displayImg) {
                this.$refs['backdrop'].style = 'transition: transform 0.5s ease;';
            }
            this.displayImg = currentImg;
            this.currentIndex = this.imgArray.indexOf(currentImg);
            this.offsetValue = this.imagesWidths.slice(0, this.currentIndex).reduce((sum, w) => sum + w, 0);
            this.translateValue = window.innerWidth / 2 - this.$refs['displayImages'][this.currentIndex].width / 2 - this.offsetValue + 'px';
        }
    }
}
</script>