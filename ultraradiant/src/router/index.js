import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vlogs',
      name: 'vlogs',
      component: () => import('../views/VlogsView.vue')
    },
    {
      path: '/vlogs/:id',
      name: 'vlog-detail',
      component: () => import('../views/VlogDetailView.vue')
    },
    {
      path: '/drills',
      name: 'drills',
      component: () => import('../views/DrillsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
