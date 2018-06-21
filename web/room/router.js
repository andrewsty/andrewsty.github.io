export const asyncRoutes = [
  {
    path: '/room',
    component: () => import('@/async/room'),
    meta: {
      id: 1
    }
  },
  { path: '*', redirect: '/404' }
]
