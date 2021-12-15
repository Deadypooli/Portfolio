<template>
    <div class="display-backdrop"
    v-on:click.self="toggleModal">
        <img v-bind:src="displayImage" class="display-img">
    </div>
</template>

<script>
export default {
    props: ['selectedImage'],
    data () {
        return {
            displayImage: this.selectedImage
        }
    },
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
        }
    }
}
</script>