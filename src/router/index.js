import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HomePageSpan from '../views/HomePageSpan.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/spanish',
    name: 'HomeSpan',
    component: HomePageSpan
  },
  {
    path: '/*',
    name: '',
    component: 404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})

export default router

