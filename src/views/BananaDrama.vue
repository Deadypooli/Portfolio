<template>
    <Header />
    <main>
        <div class="banana-headline">
            <h1>Banana Drama</h1>
            Banana Drama is a RTS game on steam. The first game I got to work on and it was a lot of fun for me.
            I really liked being creative and create fun animal characters, that players could actually play.
        </div>
        <div
        v-for="element in animalsArray"
        :key="element"
        class="banana-container">
            <div class="banana-gif-container">
                <img
                class="banana-gif" 
                :src="element.gif">
                <div class="banana-gif-text">
                    <h1>The {{element.name}}</h1>
                </div>
            </div>
            <div class="banana-image-container">
                <div class="banana-image-description">
                    <p>{{element.description}}</p>
                </div>
                <Slider
                :imageArray="element.imgArray"
                />
            </div>
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Slider from '@/components/Slider.vue';

    export default {
        components: { Header, Slider },
        name: 'BananaDrama',
        data() {
            return {
                animalsArray: [
                    {
                        name: 'Cow',
                        description: 'Cow (moo)! The cow is very self-confident and often likes to show off its beautiful udder!',
                        gif: require('@/img/projects/cow.gif'),
                        imgArray: [
                            require('@/img/projects/cow-wireframe.jpg'),
                            require('@/img/projects/cow-render.jpg')
                        ],
                        wireframe: require('@/img/projects/cow-wireframe.jpg'),
                        render: require('@/img/projects/cow-render.jpg'),
                    },
                    {
                        name: 'Tiger',
                        description: 'Wow a tiger! He is particularly proud of his beautiful coat and regularly impresses many female tigers with it.',
                        gif: require('@/img/projects/tiger.gif'),
                        imgArray: [
                            require('@/img/projects/tiger-wireframe.jpg'),
                            require('@/img/projects/tiger-render.jpg')
                        ],
                    },
                    {
                        name: 'Lion',
                        description: 'Roaarrrr - the lion! A lion throwing bananas is a little unusual at first glance, but he has learnt this effective fighting technique from the monke(y)s!',
                        gif: require('@/img/projects/lion.gif'),
                        imgArray: [
                            require('@/img/projects/lion-wireframe.jpg'),
                            require('@/img/projects/lion-render.jpg')
                        ],
                    },
                    {
                        name: 'Cockatoo',
                        description: 'Fly cockatoo! Similar to his best friend "Kiki the cockatoo" his abilities are often underestimated due to his cute looks!',
                        gif: require('@/img/projects/cockatoo.gif'),
                        imgArray: [
                            require('@/img/projects/cockatoo-wireframe.jpg'),
                            require('@/img/projects/cockatoo-render.jpg')
                        ],
                    },
                    {
                        name: 'Giraffe',
                        description: 'Helicopter giraffe! Sometimes she gets so excited that she can\'t stop spinning her head like a helicopter. Let\'s hope she doesn\'t fly away!',
                        gif: require('@/img/projects/giraffe.gif'),
                        imgArray: [
                            require('@/img/projects/giraffe-wireframe.jpg'),
                            require('@/img/projects/giraffe-render.jpg')
                        ],
                    }
                ]
            };
        },
    };
</script>