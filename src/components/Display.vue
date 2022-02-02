<template>
    <div class="display-backdrop"
    ref="displayBackdrop"
    v-on:click.self="toggleModal">
            <img class="display-img"
                v-bind:src="displayImage"
            >
    </div>
</template>

<script>
export default {
    props: ['selectedImage', 'images'],
    data () {
        return {
            displayImage: this.selectedImage,
            imageArray: this.images,
        }
    },
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
            document.body.classList.remove('body-noscroll');
        },
    }
}
</script>