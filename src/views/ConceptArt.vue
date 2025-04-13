<template>
    <Header />
    <main>        
        <div
        class="concept-container">
                <img 
                class="concept-img"
                v-for="key in imgArray"
                :src="key"
                ref="image"
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
				require ('@/img/fir_concept.png'),
				require ('@/img/lorikeet_concept.png'),
				require ('@/img/penguin_concept.png'),
                require ('@/img/rage.png'),
				require ('@/img/red-spider_concept.png'),
				require ('@/img/Rose.png'),
                ]
            }
        },
    };
</script>