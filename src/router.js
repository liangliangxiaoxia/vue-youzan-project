import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import General from './views/general/General.vue'
import Goods from './views/goods/Goods.vue'
import Order from './views/order/Order.vue'
import Customer from './views/customer/Customer.vue'
import Login from './views/login/Login.vue'

const router = new VueRouter({
  //配置路由
  routes: [
    { path: '/general', component: General },
    { path: '/goods', component: Goods },
    { path: '/order', component: Order },
    { path: '/customer', component: Customer },
    { path: '/login', name: 'login', component: Login },
    { path: '/', redirect: '/general' },
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let res = localStorage.getItem('login')
    if (res) {
      let isLogin = JSON.parse(res).isLogin
      if (isLogin === 1) {
        next()
      } else {
        next('/login')
      }
    } else {
      next('/login')
    }
  }

})

export default router
