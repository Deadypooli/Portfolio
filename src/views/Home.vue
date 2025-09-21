<template>
  <Header />
  <div class="justified-gallery" ref="galleryContainer">
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
        />
        <div
          v-else-if="item.type === 'text'"
          class="text-block"
          :style="{ width: item.displayWidth + 'px',
                    height: row.rowHeight + 'px',
                    fontSize: row.rowHeight * 0.6 + 'px',}">
          {{ item.content }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      imgArray:[],
      rows: [],
      TARGET_ROW_HEIGHT: 300,
    };
  },
  mounted() {
    this.importAll(require.context('@/img/personal/', true));
    this.buildRows();
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.imgArray.push(r(key))));
    },
    loadImageData(src) {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
        img.src = src;
      })
    },

    generateRow(items, containerWidth) {
      const totalAspect = items.reduce((sum, item) => sum + item.aspectRatio, 0)
      const rowHeight = containerWidth / totalAspect
      const scaledItems = items.map((item) => ({
        ...item,
        displayWidth: rowHeight * item.aspectRatio,
      }))
      return { items: scaledItems, rowHeight }
    },
    async buildRows() {
      
      const containerWidth = window.innerWidth;
      
      // Load image metadata only once
      const metadata = await Promise.all(this.imgArray.map((img) => this.loadImageData(img)));
      
      const allItems = metadata.map((meta, i) => ({
        type: 'image',
        src: this.imgArray[i],
        width: meta.width,
        height: meta.height,
        aspectRatio: meta.width / meta.height,
      }))
      
      this.rows = []
      let currentRow = []
      let currentWidth = 0
      let i = 0
      let rowCount = 0
    
      while (i < allItems.length) {
        // Inject second row with "Neofy" and images
        if (rowCount === 1 && i + 3 <= allItems.length) {
          
          const rowItems = [
            allItems[i++],
            {
              type: 'text',
              content: 'Neofy',
              aspectRatio: 4,
            },
            allItems[i++],
            allItems[i++],
          ]
          this.rows.push(this.generateRow(rowItems, containerWidth))
          rowCount++
        }
      
        const item = allItems[i++]
        currentRow.push(item)
        currentWidth += this.TARGET_ROW_HEIGHT * item.aspectRatio
      
        if (currentWidth >= containerWidth) {
          this.rows.push(this.generateRow(currentRow, containerWidth))
          currentRow = []
          currentWidth = 0
          rowCount++
        }
      }
    
      if (currentRow.length) {
        this.rows.push(this.generateRow(currentRow, containerWidth))
      }
    }
  }
};
</script>
