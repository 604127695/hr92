import { getToken, setToken } from '@/utils/auth'
import { sysProfile } from '@/api/user'
export default {
  namespaced: true,
  state() {
    return {
      token: getToken() || '',
      // 用户信息
      userInfo: ''
    }
  },
  mutations: {
    SETTOKEN(state, value) {
      state.token = value
      setToken(value)
    },
    // 修改用户信息
    GETUSERINFO(state, valus) {
      state.userInfo = valus
    }
  },
  actions: {
    setToken(ctx, value) {
      ctx.commit('SETTOKEN', value)
    },
    // 调用修改用户信息
    async getUserInfo(ctx) {
      const res = await sysProfile()
      ctx.commit('GETUSERINFO', res.data)
    }
  }
}
