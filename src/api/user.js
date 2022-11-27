import request from '@/utils/request'
import store from '@/store'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

// 获取用户信息
export const sysProfile = (data) => {
  return request({
    url: '/sys/profile',
    method: 'post',
    headers: {
      Authorization: `Bearer ${store.state.user.token}`
    },
    data
  })
}
