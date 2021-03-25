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
<<<<<<< HEAD
    path: '/info_more_email',
    name: 'Info_more_email',
    component: Info_more_email
  },
  {
    path: '/info_more_phone',
    name: 'Info_more_phone',
    component: Info_more_phone
  },
  {
    path: '/info_more_sex',
    name: 'Info_more_sex',
    component: Info_more_sex
  },
  {
    path: '/info_more_add',
    name: 'Info_more_add',
    component: Info_more_add
  },
  {
    path: '/info_more',
    name: 'Info_more',
    component: Info_more
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
=======
>>>>>>> 9a741447487f7e179465bf1cf007556b7571449b
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
<<<<<<< HEAD
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
=======
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
>>>>>>> 9a741447487f7e179465bf1cf007556b7571449b
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
