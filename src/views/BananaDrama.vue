<template>
    <Header />
    <div class="banana-image" :style="{backgroundImage: 'url(' + heroImg + ')' }">
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
        v-for="(animal) in animalsArray"
        :key="animal"
        class="banana-turn">
            <img :src="animal">
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
                // cowDance: require('@/img/bananaDrama/cow.gif'),
                // tigerPeek: require('@/img/bananaDrama/tiger-peek.png'),
                animalsArray: [],
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