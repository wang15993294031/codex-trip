<template>
  <div class="image-carousel">
    <div 
      class="carousel-container"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div 
        class="carousel-track"
        :style="{ transform: `translateX(-${offsetPercent}%)` }"

      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="carousel-slide"
        >
          <img :src="image" :alt="图片 " />
        </div>
      </div>
    </div>
    
    <!-- 指示器 -->
    <div class="carousel-indicators">
      <span 
        v-for="(_, index) in images" 
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const diff = touchStartX - touchEndX
  const threshold = 50 // 滑动阈值
  
  if (diff > threshold) {
    // 左滑，下一张
    if (currentIndex.value < props.images.length - 1) {
      currentIndex.value++
    }
  } else if (diff < -threshold) {
    // 右滑，上一张
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }
}
</script>

<style scoped>
.image-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-out;
}

.carousel-slide {
  min-width: 100%;
  height: 300px;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}
</style>
