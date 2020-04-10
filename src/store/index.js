import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import boom from './modules/boom'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      app,
      boom
  }
})
