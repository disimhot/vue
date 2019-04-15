import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/EditUser.vue')
    },
    {
      path: '*',
      component: () => import('@/views/Main.vue')
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history'
})
