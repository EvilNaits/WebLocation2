import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    cart: {
      count: 0,
      price: 0,
      items: []
    }
  },
  getters: {
    getCount(state) {
      const data = localStorage.getItem('cart')
      if(data !== null) {
        state.cart = JSON.parse(data)
      }

      return state.cart.count
    }
  },
  mutations: {
    add(state, productId) {
      state.cart.count++
      state.cart.items.push(productId)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    remove(state, productId) {
      state.cart.count--
      state.cart.items.pop()
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {

  },
  modules: {
  }
})
