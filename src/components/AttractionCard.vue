<template>
  <div class="attraction-card" @click="('click')">
    <img :src="attraction.coverImage" :alt="attraction.name" class="card-image" />
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">{{ attraction.name }}</h3>
        <div class="card-rating">⭐ {{ attraction.rating }}</div>
      </div>
      <p class="card-description">{{ attraction.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  attraction: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])
</script>

<style scoped>
.attraction-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.attraction-card:active {
  transform: scale(0.98);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 12px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.card-rating {
  background: #fff3e0;
  color: #ff9800;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.card-description {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
