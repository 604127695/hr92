import { getToken, setToken } from '@/utils/auth'

export default {
  namespaced: true,
  state() {
    return {
      token: getToken() || ''
    }
  },
  mutations: {
    SETTOKEN(state, value) {
      state.token = value
      setToken(value)
    }
  },
  actions: {
    setToken(ctx, value) {
      ctx.commit('SETTOKEN', value)
    }
  }
}
