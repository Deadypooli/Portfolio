<template>
    <Header />
    <main>
        <div class="project-container">
            <div class="gif-container">
                <img
                class="gif-image" 
                :src="gifImg">
                <div class="gif-text">
                    <h1>Cow</h1>
                </div>
            </div>
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
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: { Header },
        name: 'Projects',
        data() {
            return {
                wireImg: require('@/img/projects/cow-wireframe.png'),
                renderImg: require('@/img/projects/cow-render.png'),
                gifImg: require('@/img/projects/cow.gif')
            };
        },
        methods: {
            slideImg (e) {
                this.$refs.container.style.setProperty('--position', `${e.target.value}%`);
            }
        }
    };
</script>