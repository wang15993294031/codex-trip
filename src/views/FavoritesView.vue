<template>
  <div class="favorites-view">
    <div class="page-container">
      <h1 class="page-title">我的收藏</h1>
      
      <div v-if="favorites.length === 0" class="empty-state">
        <div class="icon">❤️</div>
        <div class="title">还没有收藏</div>
        <div class="subtitle">去首页发现喜欢的景点吧</div>
      </div>
      
      <div v-else class="favorites-list">
        <div 
          v-for="item in favorites" 
          :key="item.id" 
          class="favorite-item"
          @click="goToDetail(item.id)"
        >
          <img :src="item.coverImage" :alt="item.name" class="cover-image" />
          <div class="item-info">
            <h3 class="item-name">{{ item.name }}</h3>
            <div class="item-rating">⭐ {{ item.rating }}</div>
            <p class="item-description">{{ item.description }}</p>
          </div>
          <button 
            class="remove-btn"
            @click.stop="handleRemove(item.id)"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useFavorites } from '../stores/favorites'

const router = useRouter()
const { favorites, removeFavorite } = useFavorites()

const goToDetail = (id) => {
  router.push(/detail/)
}

const handleRemove = (id) => {
  removeFavorite(id)
}
</script>

<style scoped>
.favorites-view {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.page-container {
  padding: 12px;
  padding-bottom: 80px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #c23531;
  margin-bottom: 16px;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 12px;
}

.empty-state .icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-state .title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.empty-state .subtitle {
  font-size: 14px;
  color: #999;
}

.favorites-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.favorite-item {
  display: flex;
  background: white;
  border-radius: 12px;
  padding: 12px;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

.favorite-item:active {
  transform: scale(0.98);
}

.cover-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.item-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.item-rating {
  font-size: 14px;
  color: #ff9800;
  margin-bottom: 6px;
}

.item-description {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
}
</style>
