import { ref, computed } from 'vue'

const STORAGE_KEY = 'beijing-trip-favorites'

// 从localStorage读取收藏数据
const loadFavorites = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (e) {
    console.error('Failed to load favorites:', e)
    return []
  }
}

// 收藏列表
const favorites = ref(loadFavorites())

// 保存到localStorage
const saveFavorites = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
  } catch (e) {
    console.error('Failed to save favorites:', e)
  }
}

// 添加收藏
const addFavorite = (attraction) => {
  if (!favorites.value.find(item => item.id === attraction.id)) {
    favorites.value.push({
      id: attraction.id,
      name: attraction.name,
      coverImage: attraction.coverImage,
      rating: attraction.rating,
      description: attraction.description
    })
    saveFavorites()
  }
}

// 取消收藏
const removeFavorite = (id) => {
  favorites.value = favorites.value.filter(item => item.id !== id)
  saveFavorites()
}

// 检查是否已收藏
const isFavorite = (id) => {
  return computed(() => favorites.value.some(item => item.id === id))
}

export const useFavorites = () => {
  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }
}
