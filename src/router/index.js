import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/proyectos',
    name: 'all-projects',
    component: () => import('../views/AllProjectsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router