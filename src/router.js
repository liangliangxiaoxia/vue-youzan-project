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
      {path:'/general',component:General},
      {path:'/goods',component:Goods},
      {path:'/order',component:Order},
      {path:'/customer',component:Customer},
      {path:'/login',component:Login},
      {path:'/',redirect:'/general'},
  ]
})

export default router
