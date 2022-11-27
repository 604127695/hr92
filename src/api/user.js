import request from '@/utils/request'
import store from '@/store'

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

// 获取用户头像等其它用户信息
export const sysUser = (id) => {
  return request({
    url: '/sys/user/' + id
  })
}
