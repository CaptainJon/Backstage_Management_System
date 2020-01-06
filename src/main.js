// 组件引入
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 插件引入
import './plugins/element.js'
import axios from 'axios'

// 样式引入
import './assets/css/normalize.css'
import './assets/css/global.css'

import './mockdata/mockdata'

// 额外设置
Vue.config.productionTip = false

// 1.将axios挂载到Vue原型
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
