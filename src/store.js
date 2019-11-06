import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from './utils/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  //全局数据
  state: {
    //概况 的 实时概况
     realtimeArr:[],
     mindArr:[]
  },
  //更改数据
  mutations: {
    updateRealtime(state,payload){
        state.realtimeArr = payload;
    },
    updateMindArr(state,payload){
      state.mindArr = payload;
  }
  },
  //请求数据
  actions: {
    getRealtime(store){
        fetch('/db/realtime.json',(data)=>{
           console.log(data)
           store.commit('updateRealtime',data)
        })
     },
     getMind(store){
      fetch('/db/mind.json',(data)=>{
         console.log(data)
         store.commit('updateMindArr',data)
      })
   },
  }
})

export default store
