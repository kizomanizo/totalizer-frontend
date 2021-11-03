import axios from 'axios'

export default ({
  namespaced: true,
  state: {
    alert: null,
    message: null,
    payload: null,
  },

  mutations: {
    SET_ALERT(state, alert) {
      state.alert = alert
    },
    SET_MESSAGE(state, message) {
      state.message = message
    },
    SET_PAYLOAD(state, payload) {
      state.payload = payload
    },
  },

  getters: {
    alert (state) {
      return state.alert
    },
    message (state) {
      return state.message
    },
    payload (state) {
      return state.payload
    },
  },

  actions: {
    async commitHelper({ commit }, data) {
      try {
        commit('SET_ALERT', false)
        commit('SET_MESSAGE', 'Payload has been received.')
        commit('SET_PAYLOAD', data)
      } catch (error) {
        commit('SET_ALERT', true)
        commit('SET_MESSAGE', error.statusCode)
        commit('SET_PAYLOAD', error.message)
      }
    },
    async getHello ({dispatch }) {
      let response = await axios.get('/1pq7')
      return dispatch('commitHelper', response.data.payload)
    },    
    async getTotal ({dispatch}) {
      let response = await axios.get('/mdj')
      return dispatch('commitHelper', response.data.payload)
    },
    async getOther ({dispatch}) {
      let response = await axios.get('/255t')
      return dispatch('commitHelper', response.data.payload)
    },
    async getError ({dispatch}) {
      let response = await axios.get('/4i1d')
      return dispatch('commitHelper', response.data.payload)
    }
  },
})