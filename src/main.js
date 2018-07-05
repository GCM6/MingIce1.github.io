// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'
import * as types from './store/types'
import Headers from './components/headers'
import Footers from './components/footer'
import VueResource from 'vue-resource'
import { Form, FormItem, Input, Button, DatePicker } from 'element-ui'
import Mock from './mock/mock'
Mock.init()
/* 全局配置 */
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
Vue.use(VueResource)
Vue.use(Form)
Vue.use(Button)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(DatePicker)
Vue.component('Headers', Headers)
Vue.component('Footers', Footers)
/* Axios.defaults.baseURL = 'https://api.douban.com'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' */
Vue.config.productionTip = false
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
  let token = window.sessionStorage.getItem('access-token')
  if (token) {
    /* 判断是否存在token，如果存在的话，则每个http header都加上token */
    config.headers.Authorization = 'token $ {store.state.token}'
  }
  console.log(config)
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
// 对响应数据做点什么
  return response
}, function (error) {
// 对响应错误做点什么
  if (error.response) {
    switch (error.response.status) {
      /* 401 清除token信息并跳转到登录页面 */
      case 401: store.commit(types.LOGOUT)
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  /* 返回接口返回的错误信息 */
  return Promise.reject(error.response.data)
})
/* 全局引入swiper */
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
