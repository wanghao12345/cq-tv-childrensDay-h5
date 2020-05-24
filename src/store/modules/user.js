const state = {
  token: '',
  user: ''
}

const mutations = {
  SET_TOKEN: (state, data) => {
      state.token = data
  },
  SET_USER: (state, data) => {
    state.user = data
  }
}

const actions = {
  setToken ({ commit }, data) {
    commit('SET_TOKEN', data)
  },
  setUser ({ commit }, data) {
    commit('SET_USER', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
