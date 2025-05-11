<template>
    <Header />
    <main>
        <div class="banana-headline">
            <h1>Banana Drama</h1>
            Banana Drama is a RTS game on steam. The first game i got to work on and it was a lot of fun for me.
            I really liked letting out my creativity and make fun animals, that players could actually play.
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
                        description: 'The Cow intimidates all oponents with its ominent udder swing',
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
                        description: 'All foes with bow down by the cuteness of this tiger kitten',
                        gif: require('@/img/projects/tiger.gif'),
                        imgArray: [
                            require('@/img/projects/tiger-wireframe.jpg'),
                            require('@/img/projects/tiger-render.jpg')
                        ],
                    },
                    {
                        name: 'Lion',
                        description: 'He will scratch out the sense of evil in you',
                        gif: require('@/img/projects/lion.gif'),
                        imgArray: [
                            require('@/img/projects/lion-wireframe.jpg'),
                            require('@/img/projects/lion-render.jpg')
                        ],
                    },
                    {
                        name: 'Cockatoo',
                        description: 'The cockatoo swirls all his enemies to the ground with his graceful jump',
                        gif: require('@/img/projects/cockatoo.gif'),
                        imgArray: [
                            require('@/img/projects/cockatoo-wireframe.jpg'),
                            require('@/img/projects/cockatoo-render.jpg')
                        ],
                    },
                    {
                        name: 'Giraffe',
                        description: 'Watch out, the giraffes neck might be longer than you think and hell of a weapon when using it as helicopter blades',
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