import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        { path: '', component: () => import('@modules/inicio/pages/index/index.vue') }
      ]
    },
    {
      path: '/admin',
      children: [
        { path: '', component: () => import('@modules/inicio/pages/principal/admin.vue') }
      ]
    },
    {
      path: '/user',
      children: [
        { path: '', component: () => import('@modules/inicio/pages/principal/user.vue') }
      ]
    },
  ]
})

export default router
