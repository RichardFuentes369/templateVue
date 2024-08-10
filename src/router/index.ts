import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        { path: '', component: () => import('../modules/index/pages/index.vue') }
      ]
    },
  ]
})

export default router
