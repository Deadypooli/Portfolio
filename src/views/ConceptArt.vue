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
				require ('@/img/concepts/fir_concept.png'),
				require ('@/img/concepts/lorikeet_concept.png'),
				require ('@/img/concepts/penguin_concept.png'),
				require ('@/img/concepts/red-spider_concept.png'),
				require ('@/img/concepts/Rose.png'),
                ]
            }
        },
    };
</script>