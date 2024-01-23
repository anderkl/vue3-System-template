import { createStore } from 'vuex'

const state = {}
export default createStore({
  state,
  getters: {},
  mutations: {
    ...Object.keys(state).reduce((obj, key) => {
      return {
        ...obj,
        [key]: (state: any, payload: any) => (state[key] = payload)
      }
    }, {})
  },
  actions: {},
  modules: {}
})
