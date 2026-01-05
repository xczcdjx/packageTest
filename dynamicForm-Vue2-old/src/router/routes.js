const routes = [
  {
    path: '/',
    name: 'input-single',
    component: () => import('../views/singleData.vue')
  },
  {
    path: '/input-cascade',
    name: 'input-cascade',
    component: () => import('../views/cascadeData.vue')
  }
]
export default routes
