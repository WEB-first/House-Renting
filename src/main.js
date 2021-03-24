import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

//配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//配置 MintUI
import MintUI from 'mint-ui'                                     
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
