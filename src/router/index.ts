import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Female from '../views/Female.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/female',
    name: 'female',
    component: () => import(/* webpackChunkName: "female" */ '../views/Female.vue')
  },
  {
    path: '/male',
    name: 'male',
    component: () => import(/* webpackChunkName: "female" */ '../views/Male.vue')
  },
  {
    path: '/gift',
    name: 'gift',
    component: () => import(/* webpackChunkName: "female" */ '../views/Gift.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import(/* webpackChunkName: "female" */ '../views/Tools.vue')
  },
  {
    path: '/clothing',
    name: 'clothing',
    component: () => import(/* webpackChunkName: "female" */ '../views/Clothing.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import(/* webpackChunkName: "female" */ '../views/Show.vue')
  },
  {
    path: '/cooperation',
    name: 'cooperation',
    component: () => import(/* webpackChunkName: "female" */ '../views/Cooperation.vue')
  },
  {
    path: '/culture',
    name: 'culture',
    component: () => import(/* webpackChunkName: "female" */ '../views/Culture.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
