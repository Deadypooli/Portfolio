<template>
    <Header />
    <div class="illustrations-container">
        <div class="illustrations-slider">

            <div
                ref="sliderItems"
                class="slider-items">
            
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
                :class="{hidden: !(slidePosition < 0)}"
                v-on:click="slide(+1)">
                &larr;
            </button>
            <button
                class="illustration-btn"
                :class="{hidden: !(-slidePosition < (imgArray.length - 1))}"
                v-on:click="slide(-1)">
                &rarr;
            </button>
            </div>
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
                require ('@/img/illustrations/rage.png'),
				require ('@/img/illustrations/fall.jpg'),
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
            if (direction == -1) {
                this.count = this.count + (direction * (this.$refs['image'][-this.slidePosition].width + 40));
                
            } else {
                this.count = this.count + (direction * (this.$refs['image'][-(this.slidePosition + 1)].width + 40));
                
            }
            this.$refs.sliderItems.style.transform = 'translateX(' + this.count + 'px)';
            
            this.slidePosition = this.slidePosition + direction;
        }
	}
}
</script>