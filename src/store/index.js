import Vue from 'vue'
import Vuex from 'vuex'
/* import * as types from './types' */
/* 全局注册到每个组件中 */
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    order: {
      'countss': 1,
      'select': 1,
      'radioslist': 1,
      'BankId': 1
    },
    price: 0
  },
  mutations: {
    updateOrder(state, data) {
      state.order[data[0]] = data[1]
    },
    updatePrice(state, prices) {
      /* 将cat.vue中的总价数据传递过来，然后赋值 */
      state.price = prices
    }
    /* [types.LOGIN]: (state, data) => {
      let token = window.sessionStorage.getItem('access-token')
      data = token
      state.token = data
      alert(state.token)
    },
    [types.LOGOUT]: (state) => {
      sessionStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    } */
  },
  actions: {
    /* context承上启下的作用 */
    updateOrder(context, data) {
      /* 当前操作的数据 */
      context.commit('updateOrder', data)
    },
    updatePrice(context, prices) {
      /* 当前操作数据形成的总价 */
      context.commit('updatePrice', prices)
    }
  },
  getters: {
    /* 当前选择的数据 */
    getOrder(state) {
      return state.order ? state.order : {}
    },
    getPrice(state) {
      /* 当前选择数据的总价 */
      return state.price > 0 ? '￥' + state.price : 0
    },
    getBank(state) {
      /* 判断当前的ID返回对应的银行密钥 */
      if (state.order.BankId === 901) {
        return '支付宝'
      } else if (state.order.BankId === 801) {
        return '储蓄银行'
      } else if (state.order.BankId === 701) {
        return '中国银行'
      } else if (state.order.BankId === 401) {
        return '中国农业银行'
      } else if (state.order.BankId === 301) {
        return '中国建设银行'
      } else if (state.order.BankId === 201) {
        return '招商银行'
      } else if (state.order.BankId === 101) {
        return '中国工商银行'
      } else if (state.order.BankId === 1000) {
        return '交通银行'
      }
    }
  }
})
