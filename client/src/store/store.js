import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
//   strict: true,
//   plugins: [
//     createPersistedState()
//   ],
  state: {
    token: null,
    user: null,
    admin: false,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    logout (state) {
      console.log('change')
      state.isUserLoggedIn = false
      state.token = null
      state.user = null
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
    // logout ({commit}) {
    //   commit('logout')
    // }
  },
  getters: {
    user: (state) => {
      return state.user
    }
  }
})
