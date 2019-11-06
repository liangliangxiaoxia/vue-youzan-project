import Vue from 'vue'
import Vuex from 'vuex'

import {
  fetch
} from '@/utils/index'
Vue.use(Vuex)


const store = new Vuex.Store({
  //全局数据
  state: {
    ordersArr: [], //所有列表
    ordersArr2: [], //表格分页
    ordersArr3:[]  //跳页
  },
  //更改数据
  mutations: {
    updataOrderArr(state, payload) {
      if(payload.list){
        state.ordersArr = payload.list
      }
      let page = payload.page || 5
      let list = state.ordersArr
      state.ordersArr2 = list.slice(0,page)
    },


    updatapagechage(state, payload) {
      state.ordersArr2=[];
      let page=payload.page
      console.log("当前页",page)
      state.ordersArr2=state.ordersArr.slice((page-1)*5, page*5)
        
      console.log(state.ordersArr2)
     
    }

  },
  //请求数据
  actions: {
    getorderdetails(store) {
      fetch('/db/ordersList.json', data => {
        // console.log(data)
        // console.log("新的数据",pagingArr)
        let payload = {
          page:5,
          list:data
        }
        store.commit('updataOrderArr', payload)
      })
    }

  }
})

export default store