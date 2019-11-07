<template>
  <div class="real_time">
    <!-- 标题 -->
    <div class="real_title">
      <div>
        <span>实时概况</span>
        <span>更新时间：</span>
        <span>2019-11-05 13:54:55</span>
        <span>
          <i></i>
          <i></i>
        </span>
      </div>

      <div>
        <a href>编辑</a>
      </div>
    </div>

    <div class="zent-layout-grid">
      <div class="left" v-if='realtimeArr && realtimeArr[0]'>
          <RealFrom :item="realtimeArr[0]"></RealFrom>
      </div>

      <div class="right" v-if='realtimeArr && realtimeArr[1]'>
          <RealFrom :item="realtimeArr[1]"></RealFrom>  
      </div>
    </div>
  </div>
</template>

<script>
import RealFrom from '@/components/RealFrom'
import {mapState,mapActions} from 'vuex'
export default {
    components:{
        RealFrom,
    },
    computed:{
        ...mapState(['realtimeArr'])
    },
    methods:{
        ...mapActions(['getRealtime'])
    },
    mounted(){
        if(this.realtimeArr.length === 0){
          this.getRealtime()
        }
    },
};
</script>

<style lang="scss" scoped>
.real_time {
  width: 1036px;
  height: 283px;
  background: #fff;
  padding: 20px 20px;
  overflow:hidden;
  .real_title {
    margin-bottom: 20px;
    overflow: auto;
    > div:nth-child(1) {
      float: left;
      > span:nth-child(1) {
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
      }
      > span:nth-child(2) {
        color: #999;
        font-size: 14px;
      }
      > span:nth-child(3) {
        color: #999;
        font-size: 14px;
      }
      > span:nth-child(4) {
        color: #999;
        font-size: 14px;
      }
    }
    > div:nth-child(2) {
      float: right;
      a {
        color: #155db4;
      }
    }
  }

  .zent-layout-grid {
     .left{
         width:458px;
         height:200px;
         float:left;
         padding-right:56px;
     }
     .right{
         width:458px;
         height:200px;
         float:right;
         padding-left:56px;
         border-left:1px solid #e5e5e5;
     }
  }
}
</style>