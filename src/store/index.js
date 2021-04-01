import Vue from 'vue'
import Vuex from 'vuex'
import Footer from '../views/Footer'

Vue.component('my-footer',Footer)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:sessionStorage.getItem('isLogin')==1,
    // isLogin:false,
    userInfo:sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')):''
    // userInfo:''
  },
  mutations: {
    loginSuccess(state,userInfo){
      state.isLogin=true;
      state.userInfo=userInfo;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
