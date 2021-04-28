import { createRouter, createWebHistory } from 'vue-router'
import TodayPage from '@/views/Today.vue';

const routes = [
    {
      path: '/',
      name: 'today',
      component: TodayPage
    },
    {
        path: '/tomorrow',
        name: 'tomorrow',
        component: () => import('../views/Tomorrow.vue')
    },
    {
        path: '/week',
        name: 'week',
        component: () => import('../views/Week.vue')
    },
    {
        path: '/month',
        name: 'month',
        component: () => import('../views/Month.vue')
    },
    {
        path: '/year',
        name: 'year',
        component: () => import('../views/Year.vue')
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
