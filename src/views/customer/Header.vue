<template>
    <div class="header_total">
        <span class="header_left">客户查询</span>
        <div class="header_right"><img :src="icons.icon1" alt=""></div>
    </div>
</template>
<script>
import { icons } from "@/assets/index"
export default {
    data:function(){
        return{
         icons
        }
    }
}
</script>
<style lang="scss" scoped>
.header_total{
    overflow: hidden;
    box-sizing: border-box;
    font-size: 16px;
    background: rgb(255,255,255);
    .header_left{
       float: left;
   } 
  .header_right{
       float: right;
       img{
           width:42px;
           height:30px; 
           display:block;
           border:1px solid #999999;
           margin-top:15px;
       }
   }
}

</style>
