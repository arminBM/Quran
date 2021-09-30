import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/sooreh/:id',
    name: 'Open',
    component: () => import('../views/Open.vue'),
    props: true
  },
  {
    path:'/index',
    redirect:'/'
  },
  {
    path:'/index.html',
    redirect:'/'
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
