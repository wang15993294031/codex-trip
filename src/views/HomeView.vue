<template>
  <div class="home-view">
    <div class="page-container">
      <h1 class="page-title">发现北京</h1>
      
      <!-- 搜索框 -->
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchKeyword" 
          placeholder="搜索景点名称"
          @input="handleSearch"
        />
      </div>
      
      <!-- 分类筛选 -->
      <CategoryFilter 
        :categories="categories" 
        :activeCategory="activeCategory"
        @change="handleCategoryChange"
      />
      
      <!-- 景点列表 -->
      <div v-if="loading" class="loading">
        <span>加载中...</span>
      </div>
      
      <div v-else-if="filteredAttractions.length === 0" class="empty-state">
        <div class="icon">🔍</div>
        <div>没有找到相关景点</div>
      </div>
      
      <div v-else class="attractions-grid">
        <AttractionCard 
          v-for="attraction in filteredAttractions" 
          :key="attraction.id"
          :attraction="attraction"
          @click="goToDetail(attraction.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAttractions } from '../mock/attractions'
import AttractionCard from '../components/AttractionCard.vue'
import CategoryFilter from '../components/CategoryFilter.vue'

const router = useRouter()

const attractions = ref([])
const loading = ref(true)
const searchKeyword = ref('')
const activeCategory = ref('all')

const categories = [
  { id: 'all', name: '全部' },
  { id: 'cultural', name: '文化历史' },
  { id: 'nature', name: '公园园林' },
  { id: 'modern', name: '现代建筑' },
  { id: 'history', name: '胡同文化' }
]

const filteredAttractions = computed(() => {
  let result = attractions.value
  
  // 分类筛选
  if (activeCategory.value !== 'all') {
    result = result.filter(item => item.category === activeCategory.value)
  }
  
  // 搜索筛选
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(item => 
      item.name.toLowerCase().includes(keyword) || 
      item.description.toLowerCase().includes(keyword)
    )
  }
  
  return result
})

const handleSearch = () => {
  // 搜索是响应式的，computed会自动处理
}

const handleCategoryChange = (categoryId) => {
  activeCategory.value = categoryId
}

const loadAttractions = async () => {
  loading.value = true
  try {
    const data = await getAttractions()
    attractions.value = data
  } catch (error) {
    console.error('加载景点失败:', error)
  } finally {
    loading.value = false
  }
}

const goToDetail = (id) => {
  router.push(/detail/)
}

onMounted(() => {
  loadAttractions()
})
</script>

<style scoped>
.home-view {
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

.search-box {
  margin-bottom: 16px;
}

.search-box input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
}

.search-box input:focus {
  outline: none;
  border-color: #c23531;
}

.attractions-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
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
</style>
