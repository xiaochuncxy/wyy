import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My/index.vue')
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('../views/Discover/index.vue')
  },
  {
    path: '/k-music',
    name: 'Kmusic',
    component: () => import('../views/Kmusic/index.vue')
  },
  {
    path: '/yuncun',
    name: 'Yuncun',
    component: () => import('../views/Yuncun/index.vue')
  },
  {
    path: '/boke',
    name: 'Boke',
    component: () => import('../views/Boke/index.vue')
  },
  {
    path: '/detial',
    name: 'Detial',
    component: () => import('../views/Discover/detial.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'tabs-active',
  routes
})

export default router