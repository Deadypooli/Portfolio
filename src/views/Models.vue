<template>
    <Header />
    <main>
        <div
        class="model-container"
        v-for="model in modelsArray"
        :key="model">
            <Slider
            :imageArray="model.imgArray"
            />
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Slider from '@/components/Slider.vue';

    export default {
        components: { Header, Slider },
        name: 'Models',
        data () {
            return {
                modelsArray: [
                    {
                        name: 'lightsaber',
                        imgArray: [
                            require('@/img/models/lightsaber-grip-wireframe.jpg'),
                            require('@/img/models/lightsaber-grip.jpg')
                        ]
                    },
                    {
                        name: 'eye',
                        imgArray: [
                            require('@/img/models/eye-wireframe.jpg'),
                            require('@/img/models/eye.jpg')
                        ]
                    },
                    {
                        name: 'anniversary',
                        imgArray: [
                            require('@/img/models/anniversary-wireframe.jpg'),
                            require('@/img/models/anniversary.jpg')
                        ]
                    },
                    {
                        name: 'otter-sweater',
                        imgArray: [
                            require('@/img/models/otter-sweater-wireframe.jpg'),
                            require('@/img/models/otter-sweater.jpg')
                        ]
                    }
                ]
            }
        }
    };
</script>