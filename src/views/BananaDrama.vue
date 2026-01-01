<template>
    <Header />
    <div class="banana-hero" :style="{backgroundImage: 'url(' + heroImg + ')' }">
        <div class="banana-text">
            <h1>
                Banana Drama
            </h1>
            <p>
                RTS game · Steam
            </p>
            <p>
                by artifact design
            </p>
            <h3>
                DLC Character modeling and animation
            </h3>
        </div>
    </div>
        <div 
        v-for="(animal) in imgArray"
        :key="animal"
        class="banana-images">
            <img :src="animal[0]">
            <img :src="animal[1]">
        </div>
        <div class="vid-container">
            <video class="banana-video" autoplay muted loop playsinline>
                <source :src="vid" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    <!-- <div class="banana-hero-container">
        <div class="banana-hero">
            <div class="banana-hero-header">
                <h1>
                    Banana
                </h1>
                <h1>
                    Drama
                </h1>
            </div>
            <img
            class="banana-hero-cow" 
            :src="cowDance">
            <img
            class="banana-hero-tiger" 
            :src="tigerPeek">
        </div>
    </div>
    <div class="banana-container">
        <div class="banana-description">
            Banana Drama is a free and independent RTS game.
            It offers a singleplayer and online multiplayer experience.
            <br>
            It is the first game I got to work on.
        </div>
        <div 
        v-for="(animal, index) in animalsArray"
        :key="animal"
        class="banana-turn">
            <div class="banana-turn-header">
                <h2>
                    {{ namesArray[index] }}
                </h2>
            </div>
            <img :src="animal">
        </div>
    </div> -->
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: { Header },
        name: 'BananaDrama',
        data() {
            return {
                heroImg: require('@/img/bananaDrama/Banana-hero.webp'),
                vid: require('@/img/bananaDrama/tiger-cleaning.mp4'),
                // cowDance: require('@/img/bananaDrama/cow.gif'),
                // tigerPeek: require('@/img/bananaDrama/tiger-peek.png'),
                animalsArray: [],
                imgArray: [
                    [
                        require('@/img/bananaDrama/cockatoo-front.webp'),
                        require('@/img/bananaDrama/cockatoo-side.webp')
                    ],
                    [
                        require('@/img/bananaDrama/cow-front.webp'),
                        require('@/img/bananaDrama/cow-side.webp')
                    ],
                    [
                        require('@/img/bananaDrama/giraffe-front.webp'),
                        require('@/img/bananaDrama/giraffe-side.webp')
                    ],
                    [
                        require('@/img/bananaDrama/lion-front.webp'),
                        require('@/img/bananaDrama/lion-side.webp')
                    ],
                    [
                        require('@/img/bananaDrama/tiger-front.webp'),
                        require('@/img/bananaDrama/tiger-side.webp')
                    ],
                ]
                // namesArray: [
                //     'The Cockatoo',
                //     'The Cow',
                //     'The Giraffe',
                //     'The Lion',
                //     'The Tiger',
                // ]
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