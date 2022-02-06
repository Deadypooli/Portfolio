<template>
    <div class="display-backdrop"
    v-on:click.self="toggleModal">
            <img class="display-img"
                v-bind:src="displayImage"
            >
    </div>
</template>

<script>
export default {
    props: ['selectedImage'],
    data () {
        return {
            displayImage: this.selectedImage,
        }
    },
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
            document.body.classList.remove('noscroll');
        },
    }
}
</script>