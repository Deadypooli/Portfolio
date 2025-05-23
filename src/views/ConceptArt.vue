<template>
    <Header />
    <main>        
        <div
        class="concept-container">
                <img 
                class="concept-img"
                v-for="key in imgArray"
                :src="key"
                :key="key">
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
			imgArray: [],
            }
        },
        mounted () {
            this.importAll(require.context('@/img/concepts/', true, /\.jpg$/));
        },
        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.imgArray.push(r(key))));
            },
        }
    };
</script>