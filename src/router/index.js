import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/pages/layout'
import Orders from '@/pages/order'
import Details from '@/pages/details'
import Cat from '@/pages/detalis/cat'
import Make from '@/pages/detalis/make'
import Trait from '@/pages/detalis/trait'
import Student from '@/pages/detalis/student'
import Logins from '@/components/logins'
import Register from '@/components/register'
import Shopping from '@/pages/detalis/dcomponents/shopping'
/* import * as types from '../store/types' */
/* import store from '../store/index' */
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'LayOut',
      component: LayOut
    },
    {
      path: '/order',
      name: 'order',
      component: Orders
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      redirect: '/details/cat', /* 默认重定向 */
      children: [
        {
          path: 'cat',
          meta: {
            requireAuth: true/* 自定义一个关键字，表示该路由是否需要登录才能进入 */
          },
          name: 'cat',
          component: Cat
        },
        {
          path: 'make',
          meta: {
            requireAuth: true
          },
          name: 'make',
          component: Make
        },
        {
          path: 'trait',
          meta: {
            requireAuth: true
          },
          name: 'trait',
          component: Trait
        },
        {
          path: 'student',
          meta: {
            requireAuth: true
          },
          name: 'student',
          component: Student
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Logins
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }
  ]
})
/* 页面刷新时，重新赋值token */
/* if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
  alert(types.LOGIN)
} */
/* 进入页面的时候需要检查是否登录 */
router.beforeEach((to, from, next) => {
  /* 判断该路由是否需要登录权限 */
  if (to.meta.requireAuth) {
    /* 通过全局sessionStorage获取当前的token是否存在，在logins中保存有 */
    let token = window.sessionStorage.getItem('access-token')
    if (token) {
      console.log(token)
      next()
    } else {
      next({
        path: '/Login',
        /* 将跳转的路由path作为参数，登录成功后跳转到该路由 */
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
/* router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-token')
    next()
  } else {
    let token = window.sessionStorage.getItem('access-token')
    if (!token) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
}) */
export default router
