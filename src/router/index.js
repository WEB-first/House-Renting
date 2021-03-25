import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Talk from '../views/Talk.vue'
import Phone from '../views/Phone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Phone',
    name: 'Phone',
    component:Phone
  },
  {
    path: '/talk',
    name: 'Talk',
    component: Talk
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
