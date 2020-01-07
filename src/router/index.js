import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      { path: '/newerguide', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/NewerGuide.vue') },
      { path: '/heros', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/Heros.vue') },
      { path: '/gamesystem', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/GameSystem.vue') },
      { path: '/corearmor', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/CoreArmor.vue') },
      { path: '/guildinfo', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/GuildInfo.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
