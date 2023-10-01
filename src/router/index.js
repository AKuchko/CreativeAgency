import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/services',
      component: () => import('@/views/ServiceView.vue'),
    }
  ]
})

export default router
