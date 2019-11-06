import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 封装请求方法
function fetch(api,callback){
  axios({
    method:'GET',
    url:'http://localhost:8080'+api
  }).then(res=>{
    let data=null
    if(res.data.err===0){
      data=res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('请求失败',err)
  }).then(()=>{

  })
}
const store = new Vuex.Store({
  //全局数据
  state: {
     goodsArr:[],  //goods 数据
     newGoodArr:[],
     num:0,
  },
  //更改数据
  mutations: {
    updateGoodsArr(state,payload){
      
      state.goodsArr=payload
      state.num=state.goodsArr.length
      console.log(state.num)

      let newArr=[]
      let num=payload.length
      for(let i=0;i<num/5;i++){
        newArr.push(payload.splice(0,5))
      }
      state.newGoodArr=newArr
    },
      
  },
  //请求数据
  actions: {
    getGoodsArr(store){
      fetch('/db/goods.json',data=>{
        console.log("得到的数据",data)
        store.commit('updateGoodsArr',data)
      })
    }
  }
})

export default store
