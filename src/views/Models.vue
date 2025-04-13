<template>
    <Header />
    <main>
        
        <div
        class="container"
        ref="container">
        <div class="image-container">
            <img 
            class="image-before slider-image"
            :src="wireImg">
            <img 
            class="image-after slider-image"
            :src="renderImg">
            <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="slider"
            @input="(e) => slideImg(e)"
            />
            <div class="slider-button">
                |||
            </div>
        </div>
    </div>
</main>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: { Header },
        name: 'Models',
        data() {
            return {
                wireImg: require('@/img/models/lightsaber-grip-wireframe.png'),
                renderImg: require('@/img/models/lightsaber-grip.png'),
            };
        },
        methods: {
            slideImg (e) {
                this.$refs.container.style.setProperty('--position', `${e.target.value}%`);
            }
        }
    };
</script>