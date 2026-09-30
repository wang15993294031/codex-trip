import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
