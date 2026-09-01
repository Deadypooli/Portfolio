import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/bananaDrama',
    name: 'BananaDrama',
    component: () => import('../views/BananaDrama.vue')
  },
  {
    path: '/magic-munich',
    name: 'MagicMunich',
    component: () => import('../views/MagicMunich.vue')
  },
  {
    path: '/proto-0',
    name: 'Proto0',
    component: () => import('../views/CarProject.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
