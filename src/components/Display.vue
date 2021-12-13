<template>
    <div class="display-backdrop"
    v-on:click.self="toggleModal">
        <img src="../assets/fall.png" class="display-img">
    </div>
</template>

<script>
export default {
    methods: {
        toggleModal () {
            this.$emit('clicked', false);
        }
    }
}
</script>