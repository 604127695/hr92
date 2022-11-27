import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

const request = axios.create({
  // 将及地址改成环境变量里的及地址
  baseURL: process.env.VUE_APP_URL
})

request.interceptors.request.use(
  (config) => {
    if (!config.noToken) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    // console.dir(error)
    // 统一处理401错误
    if (error.response && error.response.status === 401) {
      Message.error(error.response.data.message)
      store.commit('user/LOGOUT')
      router.push('/login')
    }

    return Promise.reject(error)
  }
)
export default request
