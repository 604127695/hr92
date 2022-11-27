import Vue from 'vue'

const dirs = {
  imgerror: {
    inserted(dom, obj) {
      // 如果img有src就使用它自己的src,没有就使用默认图片
      dom.src = dom.src || obj.value || require('@/assets/common/head.jpg')
      // 图片加载出错的处理
      dom.onerror = () => {
        dom.src = obj.value || require('@/assets/common/head.jpg')
      }
    },
    componentUpdated(dom, obj) {
      // 考虑更新问题
      dom.src = dom.src || obj.value || require('@/assets/common/head.jpg')
    }
  }
}

Object.keys(dirs).forEach((key) => {
  Vue.directive(key, dirs[key])
})
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
