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
    }
  },
})

export default store
