<template>
    <Header />
    <div class="banana-hero">
        <div class="banana-header">
            <h1 class="banana">
                Banana
            </h1>
            <h1 class="drama">
                Drama
            </h1>
        </div>
        <img
            class="banana-gif" 
            :src="animalsArray[0]">
        <img
            class="banana-peek" 
            :src="animalsArray[1]">
        <!-- Banana Drama is a RTS game on steam and the first game I got to work on. It was a lot of fun for me. -->
        <!-- I really liked being creative and design fun animal characters, that players can actually play. -->
    </div>
    <div class="banana-container">
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: { Header },
        name: 'BananaDrama',
        data() {
            return {
                animalsArray: [
                    require('@/img/projects/cow.gif'),
                    require('@/img/projects/tiger-peek.png'),
                ]
            };
        },
    };
</script>