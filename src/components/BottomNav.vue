<template>
  <div class="bottom-nav">
    <router-link 
      to="/" 
      class="nav-item"
      :class="{ active: $route.path === '/' }"

    >
      <span class="nav-icon">🏠</span>
      <span class="nav-text">首页</span>
    </router-link>
    
    <router-link 
      to="/favorites" 
      class="nav-item"
      :class="{ active: $route.path === '/favorites' }"
    >
      <span class="nav-icon">❤️</span>
      <span class="nav-text">收藏</span>
      <span v-if="favoritesCount > 0" class="badge">{{ favoritesCount }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavorites } from '../stores/favorites'

const { favorites } = useFavorites()
const favoritesCount = computed(() => favorites.value.length)
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-bottom: env(safe-area-inset-bottom);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #999;
  font-size: 12px;
  transition: color 0.2s;
  position: relative;
  padding: 8px 20px;
  min-height: 44px;
}

.nav-item.active {
  color: #c23531;
}

.nav-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.nav-text {
  font-weight: 500;
}

.badge {
  position: absolute;
  top: 4px;
  right: 12px;
  background: #c23531;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 600;
}
</style>
