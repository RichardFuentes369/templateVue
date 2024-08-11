export default [
  { 
    path: '/welcome', 
    component: () => import('@module/inicio/welcome.vue')
  },
  { 
    path: '/publicaciones', 
    component: () => import('@module/inicio/publicaciones.vue')
  },
  { 
    path: '/ingreso', 
    component: () => import('@module/inicio/ingreso.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@module/inicio/notFound.vue'),
  },
];