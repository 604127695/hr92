import router from './router'
import store from './store'

const whitelist = ['/login', '/404']
router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
    if (to.path.toLowerCase() === '/login') {
      next('/')
    } else {
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
