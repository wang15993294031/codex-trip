<template>
  <div class="detail-view">
    <!-- 返回按钮 -->
    <div class="back-button" @click="goBack">
      ← 返回
    </div>
    
    <div v-if="loading" class="loading">
      <span>加载中...</span>
    </div>
    
    <div v-else-if="!attraction" class="empty-state">
      <div class="icon">🗺️</div>
      <div>景点不存在</div>
      <button class="btn btn-primary" @click="goBack">返回首页</button>
    </div>
    
    <div v-else class="detail-content">
      <!-- 图片轮播 -->
      <ImageCarousel :images="attraction.images" />
      
      <div class="info-section">
        <!-- 景点名称和评分 -->
        <div class="header">
          <h1 class="title">{{ attraction.name }}</h1>
          <div class="rating">
            ⭐ {{ attraction.rating }}
          </div>
        </div>
        
        <!-- 简短描述 -->
        <p class="description">{{ attraction.description }}</p>
        
        <!-- 基本信息 -->
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">📍 地址</div>
            <div class="info-value">{{ attraction.address }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">🕐 开放时间</div>
            <div class="info-value">{{ attraction.openTime }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">🎫 门票</div>
            <div class="info-value">{{ attraction.ticket }}</div>
          </div>
        </div>
        
        <!-- 详细介绍 -->
        <div class="section">
          <h2 class="section-title">景点介绍</h2>
          <p class="detail-text">{{ attraction.details }}</p>
        </div>
        
        <!-- 游览小贴士 -->
        <div class="section">
          <h2 class="section-title">游览小贴士</h2>
          <ul class="tips-list">
            <li v-for="(tip, index) in attraction.tips" :key="index">
              {{ tip }}
            </li>
          </ul>
        </div>
        
        <!-- 推荐路线 -->
        <div class="section">
          <h2 class="section-title">推荐游览路线</h2>
          <div class="route-box">
            {{ attraction.route }}
          </div>
        </div>
        
        <!-- 收藏按钮 -->
        <button 
          class="btn favorite-btn"
          :class="{ 'is-favorite': isFavorite(attraction.id).value }"
          @click="toggleFavorite"
        >
          {{ isFavorite(attraction.id).value ? '❤️ 已收藏' : '🤍 收藏' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAttractionById } from '../mock/attractions'
import { useFavorites } from '../stores/favorites'
import ImageCarousel from '../components/ImageCarousel.vue'

const route = useRoute()
const router = useRouter()
const { isFavorite, addFavorite, removeFavorite } = useFavorites()

const attraction = ref(null)
const loading = ref(true)

const loadAttraction = async () => {
  loading.value = true
  try {
    const data = await getAttractionById(route.params.id)
    attraction.value = data
  } catch (error) {
    console.error('加载景点详情失败:', error)
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.push('/')
}

const toggleFavorite = () => {
  if (isFavorite(attraction.value.id).value) {
    removeFavorite(attraction.value.id)
  } else {
    addFavorite(attraction.value)
  }
}

onMounted(() => {
  loadAttraction()
})
</script>

<style scoped>
.detail-view {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.back-button {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;
}

.back-button:active {
  transform: scale(0.95);
}

.detail-content {
  padding-bottom: 80px;
}

.info-section {
  padding: 20px 16px;
  background: white;
  margin-top: -20px;
  border-radius: 20px 20px 0 0;
  position: relative;
  z-index: 10;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.rating {
  background: #fff3e0;
  color: #ff9800;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
}

.description {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.info-item {
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
}

.info-label {
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
}

.info-value {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.detail-text {
  font-size: 14px;
  line-height: 1.8;
  color: #666;
}

.tips-list {
  list-style: none;
  padding: 0;
}

.tips-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.tips-list li::before {
  content: '💡';
  position: absolute;
  left: 0;
}

.route-box {
  background: #fff3e0;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.8;
  color: #333;
}

.favorite-btn {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 8px;
  background: #f5f5f5;
  color: #666;
  border: none;
  margin-top: 20px;
}

.favorite-btn.is-favorite {
  background: #ffebee;
  color: #c23531;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-state .icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-state .btn {
  margin-top: 20px;
}
</style>
