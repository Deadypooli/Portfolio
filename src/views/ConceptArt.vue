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
				require ('@/img/concepts/fir.jpg'),
				require ('@/img/concepts/lorikeet.jpg'),
				require ('@/img/concepts/penguin.jpg'),
				require ('@/img/concepts/red-spider.jpg'),
				require ('@/img/concepts/Rose.jpg'),
                ]
            }
        },
    };
</script>