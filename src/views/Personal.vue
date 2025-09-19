<template>
    <Header />
    <Display
	:selectedImage="selectedImage"
    :imgArray="imgArray"
	v-if="clicked"
	@clicked="toggleModal(key)"/>
        <div
        class="personal-container">
                <img 
                class="personal-img"
                v-for="key in imgArray"
                :src="key"
                :key="key"
                @click="toggleModal(key)">
        </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Display from '@/components/Display.vue';

    export default {
        components: { Header, Display },
        name: 'Personal',
        data () {
		return {
            selectedImage: null,
            clicked: false,
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
            toggleModal (key) {
                if (window.innerWidth > 768) {    
                    this.selectedImage = key;
                    this.clicked = !this.clicked;
                    document.body.classList.add('noscroll');
                }
            }
        }
    };
</script>