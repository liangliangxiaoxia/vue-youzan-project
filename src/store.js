import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '@/utils/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  //全局数据
  state: {
     msg:"123",
     userArr:[],
     newGoodArr:[],
     num:0,
  },
  //更改数据
  mutations: {
   updataeuserArr(state,payload){
     state.userArr = payload
     state.num = state.userArr.length

      let newArr = []
      let num = payload.length
      for(let i =0;i<num/5;i++){
        newArr.push(payload.splice(0,5))
      }
        state.newGoodArr = newArr
   },
    updateNewGoodArr(state, payload){
        console.log(state, payload)

            // // 删除一个订单
            // state.newGoodArr.map((ele,idx)=>{
            //   // 用ID来判断商品的唯一性
            //   if(ele.name === payload.item.name) {
            //     state.newGoodArr.splice(idx, 1)
            //     return
            //   }
            // })

      },
      
  },
  //请求数据
  actions: {
      getUser(store){
         fetch("/db/customer.json",data =>{
               console.log(data)
               store.commit("updataeuserArr",data)
         })
      },
      //分页
        
    }
})

export default store
