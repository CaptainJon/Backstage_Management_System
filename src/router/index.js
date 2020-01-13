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
      { path: '/guildinfo', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/GuildInfo.vue') },
      { path: '/guildevent', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/GuildEvent.vue') },
      { path: '/basebuilding', component: () => import(/* webpackChunkName: "gamesystem" */ '../views/home/gamesystem/BaseBuilding.vue') },
      { path: '/arena', component: () => import(/* webpackChunkName: "battlesystem" */ '../views/home/battlesystem/Arena.vue') },
      { path: '/mainstory', component: () => import(/* webpackChunkName: "battlesystem" */ '../views/home/battlesystem/MainStory.vue') },
      { path: '/apocalypse', component: () => import(/* webpackChunkName: "battlesystem" */ '../views/home/battlesystem/Apocalypse.vue') },
      { path: '/hardcore', component: () => import(/* webpackChunkName: "battlesystem" */ '../views/home/battlesystem/HardCore.vue') },
      { path: '/spacerift', component: () => import(/* webpackChunkName: "battlesystem" */ '../views/home/battlesystem/Spacerift.vue') },
      { path: '/gamestore', component: () => import(/* webpackChunkName: "economy" */ '../views/home/economy/GameStore.vue') },
      { path: '/coins', component: () => import(/* webpackChunkName: "economy" */ '../views/home/economy/Coins.vue') },
      { path: '/diamonds', component: () => import(/* webpackChunkName: "economy" */ '../views/home/economy/Diamonds.vue') },
      { path: '/newplayer', component: () => import(/* webpackChunkName: "operate" */ '../views/home/operate/NewPlayer.vue') },
      { path: '/onlinecalc', component: () => import(/* webpackChunkName: "operate" */ '../views/home/operate/OnlineCalc.vue') },
      { path: '/activeplayer', component: () => import(/* webpackChunkName: "operate" */ '../views/home/operate/ActivePlayer.vue') },
      { path: '/nextsaving', component: () => import(/* webpackChunkName: "operate" */ '../views/home/operate/NextSaving.vue') },
      { path: '/whitelist', component: () => import(/* webpackChunkName: "gm" */ '../views/home/gm/WhiteList.vue') },
      { path: '/sendbonus', component: () => import(/* webpackChunkName: "gm" */ '../views/home/gm/SendBonus.vue') },
      { path: '/behavelog', component: () => import(/* webpackChunkName: "dataquery" */ '../views/home/dataquery/BehaveLog.vue') },
      { path: '/playermobile', component: () => import(/* webpackChunkName: "dataquery" */ '../views/home/dataquery/PlayerMobile.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由拦截器-导航守卫
router.beforeEach((to, from, next) => {
  // 访问登录页则跳转登录页
  if (to.path === '/login') {
    next()
  }
  // 获取token
  const tokenStr = document.cookie.split('=')[1]
  // 判断是否拥有token
  if (!tokenStr) {
    next('/login') // 没有跳转登录页
  } else {
    next() // 有则放行
  }
})

export default router
