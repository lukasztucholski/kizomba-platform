import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const baseStore = {
  namespaced: true,

  state: {
    errors: {},
    loading: {},
  },

  mutations: {
    SET_ERRORS: (state, payload) => {
      state.errors = { ...payload }
    },
    SET_LOADING: (state, payload) => {
      state.loading = { ...state.loading, ...payload }
    },

  },

  actions: {
    async getSomethingFromApi({ commit }, data) {
      commit('SET_LOADING', { getSmth: true })
      try {
        // const respose = await axios.get('something')
      } catch (error) {
        commit('SET_ERRORS', error)
        console.error(error)
      }
      commit('SET_LOADING', { getSmth: false })
    }

  },

  getters: {
    errors: (state) => state.errors,
    loading: (state) => state.loading,
  },
}

export default new Vuex.Store({
  modules: { baseStore },
  // plugins: [createPersistedState()]
})
