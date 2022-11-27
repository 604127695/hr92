import { getToken, setToken } from '@/utils/auth'
import { sysProfile, sysUser } from '@/api/user'
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
    },
    // 退出处理
    LOGOUT(state) {
      state.token = ''
      setToken('')
      state.userInfo = ''
    }
  },
  actions: {
    setToken(ctx, value) {
      ctx.commit('SETTOKEN', value)
    },
    // 调用修改用户信息
    async getUserInfo(ctx) {
      // 获取用户信息 没头像
      const res = await sysProfile()
      // console.log(res)
      // 获取用户头像信息
      const res2 = await sysUser(res.data.userId)
      // 合并两个信息
      const res3 = Object.assign({}, res.data, res2.data)
      // const res3 = { ...res.data, ...res2.data }
      // 调用传递合并的信息
      ctx.commit('GETUSERINFO', res3)
    }
  }
}
