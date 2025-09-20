<template>
    <Header />
    <div class="banana-hero">
        <div class="hero-container">

            <div class="banana-header">
                <h1 class="banana">
                    Banana
                </h1>
                <h1 class="drama">
                    Drama
                </h1>
            </div>
            <img
            class="banana-gif" 
            :src="cowDance">
            <img
            class="banana-peek" 
            :src="tigerPeek">
            <!-- Banana Drama is a RTS game on steam and the first game I got to work on. It was a lot of fun for me. -->
            <!-- I really liked being creative and design fun animal characters, that players can actually play. -->
        </div>
    </div>
    <div class="banana-container">
        <div 
        v-for="(animal, index) in animalsArray"
        :key="animal"
        class="banana-turn">
            <div class="banana-text">
                <h2>
                    {{ namesArray[index] }}
                </h2>
            </div>
            <img :src="animal">
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: { Header },
        name: 'BananaDrama',
        data() {
            return {
                cowDance: require('@/img/bananaDrama/cow.gif'),
                tigerPeek: require('@/img/bananaDrama/tiger-peek.png'),
                animalsArray: [],
                namesArray: [
                    'The Cockatoo',
                    'The Cow',
                    'The Giraffe',
                    'The Lion',
                    'The Tiger',
                ]
            };
        },
        mounted () {
            this.importAll(require.context('@/img/bananaDrama/turns/', true));
        },
        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.animalsArray.push(r(key))));  
            },
        }
    };
</script>