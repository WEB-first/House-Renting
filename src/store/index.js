import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Footer from '../views/Footer'

Vue.component('my-footer',Footer)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:sessionStorage.getItem('isLogin')==1,
    userInfo:sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')):''
  },
  mutations: {
    setInfo(state,userInfo){
      state.userInfo=userInfo;
      state.isLogin=true
    }
  },
  actions: {
   
  },
  modules: {
  }
})
