import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/illustrations',
    name: 'Illustrations',
    component: () => import('../views/Illustrations.vue')
  },
  {
    path: '/models',
    name: 'Models',
    component: () => import('../views/Models.vue')
  },
  {
    path: '/bananaDrama',
    name: 'BananaDrama',
    component: () => import('../views/BananaDrama.vue')
  },
  {
    path: '/conceptArt',
    name: 'ConceptArt',
    component: () => import('../views/ConceptArt.vue')
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
