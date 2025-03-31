<template>
    <Header />
    <div class="illustrations-container">
        <button
        class="illustration-btn"
        v-on:click="slide(-1)">
        left
        </button>
        <div
        ref="illustrationsItems"
        class="illustrations-items">

            <img 
            class="item"
            v-for="key in imgArray"
            :src="key"
            :key="key.url">

        </div>
        <button
        class="illustration-btn"
        v-on:click="slide(+1)">
            right
        </button>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: { Header },

    name: 'Gallery',
	data () {
		return {
            direction: +1,
            count: 0,
			imgArray: [
				require ('@/img/fir.png'),
				require ('@/img/lorikeet.png'),
				require ('@/img/penguin.png'),
				require ('@/img/red-spider.png'),
				require ('@/img/Rose.png'),
			]
		}
	},
    methods: {
		slide (direction) {
            console.log('in');
            
            this.count = this.count + (direction * 100);
            
            this.$refs.illustrationsItems.style.transform = 'translateX(' + this.count + '%)';
        }
	}
}
</script>