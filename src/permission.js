import router from './router'
import store from './store'

const whitelist = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  // 需求：没登录不可进入首页等页面  ，登陆了就不可进入登陆页
  /*
是否登录（有没有token）
     登录
         判断是否要去登陆页
              是:跳转到首页
              不：正常进入
     没登陆
        白名单：login 404
        判断要去的页面是不是白名单页面
             是：正常进入
             不：跳转到登陆页
*/
  if (store.state.user.token) {
    if (to.path.toLowerCase() === '/login') {
      next('/')
    } else {
      // 没有用户信息才调用
      if (!store.state.user.userInfo.userId) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whitelist.includes(to.path.toLowerCase())) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from) => {})
