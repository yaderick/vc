import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Female from '../views/Female.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/female',
    name: 'female',
    redirect: { name: 'female-all' },
    component: () => import(/* webpackChunkName: "female" */ '../views/Female/index.vue'),
    children: [
      {
        path: '/female-all',
        name: 'female-all',
        component: () => import(/* webpackChunkName: "culture" */ '../views/Female/Female.vue'),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: '/skin',
        name: 'skin',
        component: () => import(/* webpackChunkName: "history" */ '../views/Female/Skin.vue'),
      },
    ]
  },
  {
    path: '/male',
    name: 'male',
    component: () => import(/* webpackChunkName: "male" */ '../views/Male.vue'),
  },
  {
    path: '/gift',
    name: 'gift',
    component: () => import(/* webpackChunkName: "gift" */ '../views/Gift.vue'),
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import(/* webpackChunkName: "tools" */ '../views/Tools.vue'),
  },
  {
    path: '/clothing',
    name: 'clothing',
    component: () => import(/* webpackChunkName: "clothing" */ '../views/Clothing.vue'),
  },
  {
    path: '/show',
    name: 'show',
    component: () => import(/* webpackChunkName: "show" */ '../views/Show.vue'),
  },
  {
    path: '/cooperation',
    name: 'cooperation',
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Cooperation.vue'),
  },
  {
    path: '/culture',
    name: 'culture',
    redirect: { name: 'default' },
    component: () => import(/* webpackChunkName: "cooperation" */ '../views/Culture/index.vue'),
    children: [
      {
        path: '/default',
        name: 'default',
        component: () => import(/* webpackChunkName: "culture" */ '../views/Culture/Culture.vue'),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'history',
        component: () => import(/* webpackChunkName: "history" */ '../views/Culture/History.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
