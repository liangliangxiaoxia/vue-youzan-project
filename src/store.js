import Vue from 'vue'
import Vuex from 'vuex'
import { fetch } from './utils/index'
Vue.use(Vuex)


const store = new Vuex.Store({
  //全局数据
  state: {
    //概况 的 实时概况
    realtimeArr: [],
    mindArr: [],
    goodsArr: [],  //goods 数据
    newGoodArr: [],
    num: 0,
    msg: "123",
    userArr: [],
    //分页
    ordersArr: [], //所有列表
    ordersArr2: [], //表格分页
    ordersArr3:[]  //跳页
    // newGoodArr: [],
    // num: 0,
  },
  //更改数据
  mutations: {
    updateRealtime(state, payload) {
      state.realtimeArr = payload;
    },
    updateMindArr(state, payload) {
      state.mindArr = payload;
    },
    updateGoodsArr(state, payload) {

      state.goodsArr = payload
      state.num = state.goodsArr.length
      console.log(state.num)

      let newArr = []
      let num = payload.length
      for (let i = 0; i < num / 5; i++) {
        newArr.push(payload.splice(0, 5))
      }
      state.newGoodArr = newArr
    },
    updataeuserArr(state, payload) {
      state.userArr = payload
      state.num = state.userArr.length

      let newArr = []
      let num = payload.length
      for (let i = 0; i < num / 5; i++) {
        newArr.push(payload.splice(0, 5))
      }
      state.newGoodArr = newArr
    },
    updateNewGoodArr(state, payload) {
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
    getRealtime(store) {
      fetch('/db/realtime.json', (data) => {
        console.log(data)
        store.commit('updateRealtime', data)
      })
    },
    getMind(store) {
      fetch('/db/mind.json', (data) => {
        console.log(data)
        store.commit('updateMindArr', data)
      })
    },
    getGoodsArr(store) {
      fetch('/db/goods.json', data => {
        console.log("得到的数据", data)
        store.commit('updateGoodsArr', data)
      })
    },
    getUser(store) {
      fetch("/db/customer.json", data => {
        console.log(data)
        store.commit("updataeuserArr", data)
      })
    },
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
  },
})

export default store