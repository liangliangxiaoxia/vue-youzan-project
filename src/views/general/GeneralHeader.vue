<template>
    <div class="general_header">
        <div class="header_left">
            <h3 class="">凉凉小夏</h3>
            <span class="blue">试用期</span>
            <span>SVIP</span>
            <span>有赞担保</span>
        </div>

        <div class="header_right">
             <span>
                 <img :src="imgs.boshimao" alt="">
             </span>
             <span>
                 <i class="fa fa-user-circle-o i1" aria-hidden="true"></i>
                 <span>13129510861</span>
                 <i class="fa fa-angle-right i2" aria-hidden="true"></i>
             </span>
        </div>
    </div>
</template>

<script>
import {imgs} from '@/assets/index'
export default {
    data(){
        return {
            imgs,
        }
    }
}
</script>

<style lang="scss" scoped>
.general_header{
  background:#fff;
  height:56px;
  width:100%;
  line-height:56px;
   padding:0 20px;
  .header_left{
      float:left;
      h3{
        padding-left:20px;
        display:inline;  
        font-size:20px;
        font-weight: bold;
        position:relative;
        top:2px;
      }
      span{
         border:1px solid #999;
         border-radius:3px;
         margin-left:5px;
         padding:3px;
      }
      .blue{
          color:#155bd4;
          border:1px solid #155bd4;
      }
  }
  .header_right{
      float:right;
      >span:nth-child(1){
          margin-right:40px;
          img{
              width:40px;
              height:32px;
              margin-top:12px;
          }
      }
      >span:nth-child(2){
          .i1{
             font-size:20px;
             color:#999;
             position:relative;
             top:3.5px;
          }
          span{
              margin:0 10px;
          }
          .i2{
             font-size:16px;
             color:#999;
          }
      }
      padding-right:20px;
  }
}
</style>