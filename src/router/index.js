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
      component: () => import("../views/login/login")
    },
    {
      path: '/main',
      name: 'main',
      component: () => import("../views/main/main")
    },
    {
      path: '/sys',
      name: 'sys',
      component: () => import("../views/main/main"),
      meta: {
        title: '系统管理'
      },
      children: [
        {
          path: 'dictList',
          name: 'dictList',
          meta: {
            icon: 'ios-paper',
            title: '字典维护',
            code:'system-manage-dict',
            requireAuth: true //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
          },
          component: () => import("../views/sys/dict/dictList")
        }
      ]
    }
  ],
  mode: "history"
})

