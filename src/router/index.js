import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/:definitionId',
    name: 'definition',
    component: () => import('../views/Definition.vue')
  },
  {
    path: '/:definitionId/:descriptionId',
    name: 'description',
    component: () => import('../views/Description.vue')
  },
  {
    path: '/:definitionId/:descriptionId/media',
    name: 'media',
    component: () => import('../views/Media.vue')
  },
]

const pathname = process.env.NODE_ENV === 'production'
  ? window.location.pathname
  : process.env.BASE_URL

const router = createRouter({
  history: createWebHashHistory(pathname),
  routes
})

export default router
