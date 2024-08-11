import { createRouter, createWebHistory } from 'vue-router'

import InicioRoute from '@module/inicio/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '', 
      component: () => import('@layout/index.vue'),
      children: InicioRoute,
    },
  ]
})

export default router
