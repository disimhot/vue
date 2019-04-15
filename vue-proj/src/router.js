import Vue from 'vue'
import Router from 'vue-router'

import Users from '@/views/Users.vue'
import About from '@/views/About.vue'
import Main from '@/views/Main.vue'
import EditUser from '@/views/EditUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditUser
    },
    {
      path: '*',
      component: Main
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history'
})
