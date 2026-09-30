<template>
  <div class="category-filter">
    <div class="filter-scroll">
      <button 
        v-for="category in categories" 
        :key="category.id"
        class="filter-btn"
        :class="{ active: activeCategory === category.id }"
        @click="('change', category.id)"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    default: 'all'
  }
})

defineEmits(['change'])
</script>

<style scoped>
.category-filter {
  margin-bottom: 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.filter-scroll {
  display: flex;
  gap: 10px;
  padding: 4px 0;
}

.filter-btn {
  flex-shrink: 0;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  color: #666;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-height: 44px;
}

.filter-btn.active {
  background: #c23531;
  border-color: #c23531;
  color: white;
}

.filter-btn:active {
  transform: scale(0.95);
}
</style>
