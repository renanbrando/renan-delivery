import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // changed history mode because server does not support it
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      components: {
        default: () => import('./views/List.vue'),
        footer: () => import('./components/Footer.vue')
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
