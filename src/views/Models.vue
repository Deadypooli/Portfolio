<template>
    <Header />
    <main>
        <Model
        :imageArray="imageArray"
        />
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
                imageArray: [
                    require('@/img/models/lightsaber-grip-wireframe.png'),
                    require('@/img/models/lightsaber-grip.png'),
                ]
            }
        }
    };
</script>