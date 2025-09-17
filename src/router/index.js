import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bananaDrama',
    name: 'BananaDrama',
    component: () => import('../views/BananaDrama.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/neofyInfo',
    name: 'NeofyInfo',
    component: () => import('../views/NeofyInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
