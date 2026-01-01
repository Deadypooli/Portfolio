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
            };
        },
    };
</script>