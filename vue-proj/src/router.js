import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history',
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
      path: '/add',
      name: 'add',
      component: () => import('@/views/AddUser.vue')
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue')
    }
  ],
})
