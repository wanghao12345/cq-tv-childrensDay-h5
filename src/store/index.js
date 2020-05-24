import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import getters from './getters'
import user from './modules/user'
import loading from './modules/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    loading
  },
  getters,
  plugins: [createPersistedState()]
})

export default store
