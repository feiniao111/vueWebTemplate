import Vue from 'vue'
import VueRouter from 'vue-router'
import pageDemo1 from './pageDemo1.router'

Vue.use(VueRouter)

const routes = [
  ...pageDemo1
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
