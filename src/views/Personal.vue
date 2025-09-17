<template>
    <Header />
    <main>        
        <div
        class="personal-container">
                <img 
                class="personal-img"
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
        name: 'Personal',
        data () {
		return {
			imgArray: [],
            }
        },
        mounted () {
            this.importAll(require.context('@/img/personal/', true));
        },
        methods: {
            importAll(r) {
                r.keys().forEach(key => (this.imgArray.push(r(key))));
            },
        }
    };
</script>