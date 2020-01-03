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

// 额外设置
Vue.config.productionTip = false
// 1.设置axios请求根路径
// axios.defaults.baseURL = 'http://106.52.104.153:8281'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 1.将axios挂载到Vue原型
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
