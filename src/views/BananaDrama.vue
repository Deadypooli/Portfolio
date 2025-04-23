<template>
    <Header />
    <main>
        <div class="headline-projects">
            <h1>Banana Drama</h1>
            Banana Drama is a RTS game on steam. The first game i got to work on and it was a lot of fun for me.
            I really liked letting out my creativity and make fun animals, that players could actually play.
        </div>
        <div
        v-for="element in animalsArray"
        :key="element"
        class="project-container">
            <div class="gif-container">
                <img
                class="gif-image" 
                :src="element.gif">
                <div class="gif-text">
                    <h1>The {{element.name}}</h1>
                </div>
            </div>
            <div class="image-container">
                <div class="image-description">
                    {{element.description}}
                </div>
                <Model
                :imageArray="element.imgArray"
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
        name: 'BananaDrama',
        data() {
            return {
                folderArray: [
                    [
                        require('@/img/projects/cow-wireframe.png'),
                        require('@/img/projects/cow-render.png'),
                        require('@/img/projects/cow.gif')
                    ],
                    [
                        require('@/img/projects/tiger-wireframe.png'),
                        require('@/img/projects/tiger-render.png'),
                        require('@/img/projects/tiger.gif')
                    ],
                    [
                        require('@/img/projects/giraffe-wireframe.png'),
                        require('@/img/projects/giraffe-render.png'),
                        require('@/img/projects/giraffe.gif')
                    ],
                    [
                        require('@/img/projects/lion-wireframe.png'),
                        require('@/img/projects/lion-render.png'),
                        require('@/img/projects/lion.gif')
                    ],
                    [
                        require('@/img/projects/cockatoo-wireframe.png'),
                        require('@/img/projects/cockatoo-render.png'),
                        require('@/img/projects/cockatoo.gif')
                    ]
                ],
                animalsArray: [
                    {
                        name: 'Cow',
                        description: 'The Cow intimidates all oponents with its ominent udder swing',
                        gif: require('@/img/projects/cow.gif'),
                        imgArray: [
                            require('@/img/projects/cow-wireframe.png'),
                            require('@/img/projects/cow-render.png')
                        ],
                        wireframe: require('@/img/projects/cow-wireframe.png'),
                        render: require('@/img/projects/cow-render.png'),
                    },
                    {
                        name: 'Tiger',
                        description: 'All foes with bow down by the cuteness of this tiger kitten',
                        gif: require('@/img/projects/tiger.gif'),
                        imgArray: [
                            require('@/img/projects/tiger-wireframe.png'),
                            require('@/img/projects/tiger-render.png')
                        ],
                    },
                    {
                        name: 'Lion',
                        description: 'He will scratch out the sense of evil in you',
                        gif: require('@/img/projects/lion.gif'),
                        imgArray: [
                            require('@/img/projects/lion-wireframe.png'),
                            require('@/img/projects/lion-render.png')
                        ],
                    },
                    {
                        name: 'Cockatoo',
                        description: 'The cockatoo swirls all his enemies to the ground with his graceful jump',
                        gif: require('@/img/projects/cockatoo.gif'),
                        imgArray: [
                            require('@/img/projects/cockatoo-wireframe.png'),
                            require('@/img/projects/cockatoo-render.png')
                        ],
                    },
                    {
                        name: 'Giraffe',
                        description: 'Watch out, the giraffes neck might be longer than you think and hell of a weapon when using it as helicopter blades',
                        gif: require('@/img/projects/giraffe.gif'),
                        imgArray: [
                            require('@/img/projects/giraffe-wireframe.png'),
                            require('@/img/projects/giraffe-render.png')
                        ],
                    }
                ]
            };
        },
    };
</script>