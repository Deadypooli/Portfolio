<template>
    <Header />
    <main>
        <div class="headline-projects">
            <h1>Banana Drama</h1>
        </div>
        <div class="project-container">
            <div class="gif-container">
                <img
                class="gif-image" 
                :src="gifImg">
                <div class="gif-text">
                    <h1>The Cow</h1>
                </div>
            </div>
            <div class="image-container">
                <div class="image-description">
                    The cow intimidates all oponents with its ominent udder swing
                </div>
                <Model
                :imageArray="imageArray"
                />
            </div>
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Model from '@/components/Model.vue';

    export default {
        components: { Header, Model },
        name: 'Projects',
        data() {
            return {
                gifImg: require('@/img/projects/cow.gif'),
                imageArray: [
                    require('@/img/projects/cow-wireframe.png'),
                    require('@/img/projects/cow-render.png'),
                ]
            };
        },
    };
</script>