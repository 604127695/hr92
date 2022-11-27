import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import '@/directives/index'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
// Vue.directive('imgerror', {
//   inserted(dom, obj) {
//     // 如果img有src就使用它自己的src,没有就使用默认图片
//     dom.src = dom.src || obj.value || require('@/assets/common/head.jpg')
//     // 图片加载出错的处理
//     dom.onerror = () => {
//       dom.src = obj.value || require('@/assets/common/head.jpg')
//     }
//   },
//   componentUpdated(dom, obj) {
//     // 考虑更新问题
//     dom.src = dom.src || obj.value || require('@/assets/common/head.jpg')
//   }
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
