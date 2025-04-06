<template>
    <Header />
    <div class="illustrations-container">
        <div
        ref="illustrationsItems"
        class="illustrations-items">
        
        <img 
        class="item"
        v-for="key in imgArray"
        :src="key"
        ref="image"
        :key="key.url">
        
        </div>
        <div class="nav">
            <button
            class="illustration-btn"
            v-if="(slidePosition < 0)"
            v-on:click="slide(+1)">
            left
            </button>
            <button
            class="illustration-btn"
            v-if="(-slidePosition < (imgArray.length - 1))"
            v-on:click="slide(-1)">
                right
            </button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: { Header },

    name: 'Illustrations',
	data () {
		return {
            direction: +1,
            slidePosition: 0,
            count: 0,
            imgWidth: 0,
			imgArray: [
				require ('@/img/fir.png'),
				require ('@/img/lorikeet.png'),
				require ('@/img/penguin.png'),
				require ('@/img/red-spider.png'),
				require ('@/img/Rose.png'),
			]
		}
	},
    mounted() {
        for (var key in this.imgArray) {
            
            this.imgWidth = this.$refs['image'][key].width;
        }
        
    },
    methods: {
		slide (direction) {
            this.slidePosition = this.slidePosition + direction;
            this.count = this.count + (direction * (this.imgWidth + 380));
            this.$refs.illustrationsItems.style.transform = 'translateX(' + this.count + 'px)';
            console.log(-this.slidePosition);
            console.log(this.imgArray.length);
            
        }
	}
}
</script>