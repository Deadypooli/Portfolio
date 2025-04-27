<template>
    <Header />
    <main>
        <div
        class="model-container"
        v-for="model in modelsArray"
        :key="model">
            <Model
            :imageArray="model.imgArray"
            />
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Model from '@/components/Model.vue';

    export default {
        components: { Header, Model },
        name: 'Models',
        data () {
            return {
                modelsArray: [
                    {
                        name: 'lightsaber',
                        imgArray: [
                            require('@/img/models/lightsaber-grip-wireframe.png'),
                            require('@/img/models/lightsaber-grip.png')
                        ]
                    },
                    {
                        name: 'eye',
                        imgArray: [
                            require('@/img/models/eye-wireframe.png'),
                            require('@/img/models/eye.png')
                        ]
                    },
                    {
                        name: 'anniversary',
                        imgArray: [
                            require('@/img/models/anniversary-wireframe.png'),
                            require('@/img/models/anniversary.png')
                        ]
                    },
                    {
                        name: 'otter-sweater',
                        imgArray: [
                            require('@/img/models/otter-sweater-wireframe.png'),
                            require('@/img/models/otter-sweater.png')
                        ]
                    }
                ]
            }
        }
    };
</script>