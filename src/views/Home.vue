<template>
  <Header />
  <Display
	:selectedImage="selectedImage"
    :imgArray="imgArray"
	v-if="clicked"
	@clicked="toggleModal(key)"/>
  <div class="gallery-container" ref="galleryContainer">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="image-row"
      :style="{ height: row.rowHeight + 'px' }">
      <template v-for="(item, itemIndex) in row.items" :key="itemIndex">
        <img
          v-if="item.type === 'image'"
          :src="item.src"
          :style="{
            width: item.displayWidth + 'px',
            height: row.rowHeight + 'px',
          }"
          class="gallery-image"
          @click="toggleModal(item.src)"
        />
        <div
          v-else-if="item.type === 'text'"
          class="text-block"
          :style="{ width: item.displayWidth + 'px',
                    height: row.rowHeight + 'px',
                    fontSize: row.rowHeight * 0.6 + 'px',}">
          NEOFY
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Display from '@/components/Display.vue';

export default {
  name: 'Home',
  components: { Header, Display },
  data() {
    return {
      selectedImage: null,
      clicked: false,
      imgArray:[],
      rows: [],
      TARGET_ROW_HEIGHT: 300,
      totalAspect: 0,
      scaledItems: null,
      containerWidth: 0,
      currentRow: [],
      currentWidth: 0,
      rowCount: 0,
      allItems: [],
    };
  },
  mounted() {
    this.importAll(require.context('@/img/personal/', true));
    this.buildRows();
    window.addEventListener('resize', this.buildRows);
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.imgArray.push(r(key))));
    },
    toggleModal (key) {
      console.log(key);
      
        if (window.innerWidth > 768) {    
            this.selectedImage = key;
            this.clicked = !this.clicked;
            document.body.classList.add('noscroll');
        }
    },
    loadImageData(src) {
      return new Promise((resolve) => {
        var img = new Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.src = src;
      })
    },

    generateRow(items, containerWidth) {
      this.totalAspect = items.reduce((sum, item) => sum + item.aspectRatio, 0);
      var rowHeight = containerWidth / this.totalAspect;
      this.scaledItems = items.map((item) => ({
        ...item,
        displayWidth: rowHeight * item.aspectRatio,
      }))
      return { items: this.scaledItems, rowHeight };
    },

    async buildRows() {
      this.containerWidth = this.$refs['galleryContainer'].offsetWidth;
      this.rows = [];
      this.currentRow = [];
      this.currentWidth = 0;
      this.rowCount = 0;
      
      const metadata = await Promise.all(this.imgArray.map((img) => this.loadImageData(img)));
      
      this.allItems = metadata.map((meta, i) => ({
        type: 'image',
        src: this.imgArray[i],
        width: meta.width,
        height: meta.height,
        aspectRatio: meta.width / meta.height,
      }));
      
      
      let i = 0;
    
      while (i < this.allItems.length) {
        if (this.rowCount === 1 && i + 3 <= this.allItems.length) {
          
          var rowItems = [
            this.allItems[i++],
            {
              type: 'text',
              aspectRatio: 2.5,
            },
            this.allItems[i++],
            this.allItems[i++],
          ];
          if (this.containerWidth < 1024) {
            rowItems = rowItems.slice(1, 2);
          }
          console.log(rowItems);
          
          this.rows.push(this.generateRow(rowItems, this.containerWidth));
          this.rowCount++;
          continue;
        }
      
        const item = this.allItems[i++]
        this.currentRow.push(item)
        this.currentWidth += this.TARGET_ROW_HEIGHT * item.aspectRatio;
      
        if (this.currentWidth >= this.containerWidth) {
          this.rows.push(this.generateRow(this.currentRow, this.containerWidth));
          this.currentRow = [];
          this.currentWidth = 0;
          this.rowCount++;
        }
      }
    
      if (this.currentRow.length) {
        this.rows.push(this.generateRow(this.currentRow, this.containerWidth));
      }
    }
  },
};
</script>
