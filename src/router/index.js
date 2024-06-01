import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index/index.vue'
import PCModel from '@/views/PC-Model/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pc-model',
      name: 'PCModel',
      component: PCModel
    }
  ]
})

export default router
