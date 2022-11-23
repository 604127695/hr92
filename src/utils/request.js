import axios from 'axios'

const request = axios.create({
  // 将及地址改成环境变量里的及地址
  baseURL: process.env.VUE_APP_URL
})

request.interceptors.request.use(
  (config) => {
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
    return Promise.reject(error)
  }
)
export default request
