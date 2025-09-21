import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/bananaDrama',
    name: 'BananaDrama',
    component: () => import('../views/BananaDrama.vue')
  },
  {
    path: '/untitled',
    name: 'Untitled',
    component: () => import('../views/Untitled.vue')
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
