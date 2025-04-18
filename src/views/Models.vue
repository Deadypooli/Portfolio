<template>
    <Header />
    <main>
        <Model />
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Model from '@/components/Model.vue';

    export default {
        components: { Header, Model },
        name: 'Models',
    };
</script>