import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

//配置 MintUI
import MintUI from 'mint-ui'                                     
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


axios.defaults.baseURL = 'http://renting.applinzi.com'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
