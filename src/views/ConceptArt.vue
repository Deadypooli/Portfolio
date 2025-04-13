<template>
    <Header />
    <main>        
        <div
        class="concept-container">
                <img 
                class="concept-img"
                v-for="key in imgArray"
                :src="key"
                :key="key.url">
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: { Header },
        name: 'ConceptArt',
        data () {
		return {
			imgArray: [
				require ('@/img/concepts/fir.png'),
				require ('@/img/concepts/lorikeet.png'),
				require ('@/img/concepts/penguin.png'),
				require ('@/img/concepts/red-spider.png'),
				require ('@/img/concepts/Rose.png'),
                ]
            }
        },
    };
</script>