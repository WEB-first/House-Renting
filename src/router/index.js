<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Article from '../views/Article.vue'
import Recommend from '../views/Recommend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article',
    name: 'Article',
    component: Article
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
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Detail from '../views/Detail.vue'
import Article from '../views/Article.vue'
import Recommend from '../views/Recommend.vue'
import Info from '../components/Info.vue'
import Info_more from '../components/Info_more.vue'
import Info_more_add from '../components/Info_more_add.vue'
import Info_more_email from '../components/Info_more_email.vue'
import Info_more_sex from '../components/Info_more_sex.vue'
import Info_more_phone from '../components/Info_more_phone.vue'
import Info_updatepwd from '../components/Info_updatepwd.vue'
import Info_updatepwd_forgetpwd from '../components/Info_updatepwd_forgetpwd.vue'
import Info_uname from '../components/Info_uname.vue'
import Info_mingzi from '../components/Info_mingzi.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  ,
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/info_uname',
    name: 'Info_uname',
    component: Info_uname
  },
  {
    path: '/info_mingzi',
    name: 'Info_mingzi',
    component: Info_mingzi
  },
  {
    path: '/info_updatepwd_forgetpwd',
    name: 'Info_updatepwd_forgetpwd',
    component: Info_updatepwd_forgetpwd
  },
  {
    path: '/info_updatepwd',
    name: 'Info_updatepwd',
    component: Info_updatepwd
  },
  {
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
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
