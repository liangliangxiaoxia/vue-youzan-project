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
    ordersArr3: [],  //跳页
    // 用户
    unArr: []
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
    },
    //获取到全部订单的数据
    updataOrderArrList(state, payload) {
      if (payload.list) {
        state.ordersArr = payload.list
      }
      state.ordersArr2 = state.ordersArr
      // console.log(state.ordersArr)
    },
    //订单分页
    updataOrderArr(state, payload) {

      let page = payload.page || 5
      let list = state.ordersArr
      state.ordersArr2 = list.slice(0, page)
      console.log(state.ordersArr2)
    },

    //订单点击页码跳转
    updatapagechage(state, payload) {
      state.ordersArr2 = [];
      let page = payload.page
      console.log("当前页", page)
      state.ordersArr2 = state.ordersArr.slice((page - 1) * 5, page * 5)
      // console.log(state.ordersArr2)

    },
    //筛选

    updatascreeOrder(state, payload) {
      let list = state.ordersArr
      // let _newArr = null;
      state.ordersArr2 = []
      switch (payload.type) {
        // for (var i = 0;i<list.length;i++){

        // }
        // 显示全部
        case "first":
          state.ordersArr2 = list;
          //  console.log(state.ordersArr2)
          break;
        //代付款
        case "second":
          list.map((ele, idx) => {
            if (ele.orderState === "代付款") {
              state.ordersArr2.push(list[idx])
            }
          })
          break;
        //代发货
        case "third":
          list.map((ele, idx) => {
            if (ele.orderState === "代发货") {
              state.ordersArr2.push(list[idx])
            }
          })
          break;
        //已发货
        case "fourth":
          list.map((ele, idx) => {
            if (ele.orderState === "已发货") {
              state.ordersArr2.push(list[idx])
            }
          })
          break;
        //已完成
        case "sixth":
          list.map((ele, idx) => {
            if (ele.orderState === "已完成") {
              state.ordersArr2.push(list[idx])
            }
          })
          break;
        //已关闭
        case "seventh":
          list.map((ele, idx) => {
            if (ele.orderState === "已关闭") {
              state.ordersArr2.push(list[idx])
            }
          })
          break;
        //退款中
        case "eighth":
          list.map((ele, idx) => {
            if (ele.orderState === "退款中") {
              state.ordersArr2.push(list[idx])
            }
          })
          break;

        default:

      }

    },

    upUnArr(state, payload) {
      state.unArr = payload;
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
          page: 5,
          list: data
        }
        store.commit('updataOrderArrList', payload)
      })
    },
    // 获取用户
    getUn(store) {
      fetch('/db/un.json', data => {
        // console.log(data);
        store.commit('upUnArr', data);
      })
    }
  }
})

export default store