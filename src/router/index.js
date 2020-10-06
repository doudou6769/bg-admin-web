import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/login/Login")
    },
    {
      path: '/main',
      name: 'main',
      component: () => import("../views/main/Main")
    }

  ]
})

