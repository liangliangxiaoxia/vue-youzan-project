<template>
    <div class="often_use">
        <!-- 常用功能 -->
         <el-col :span="4" :push="0" style="font-size:20px;">常用功能</el-col>

    <el-row type="flex" justify="space-between" align="middle" style="flex-wrap:wrap;">
      <el-col :span="5" v-for="(ele) in list" :key="ele.id">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="icon" :style="{backgroundPosition:ele.p}"></em>
          <div style="display: inline-block;color:#333;">
            <p class="pt1" v-text="ele.t">发布商品</p>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
</template>

<script>
import {dingwei} from '@/assets/index'
import "@/assets/css/icon.css";
export default {
    data(){
      return{
        list:dingwei.iconP3
      }
    }
}
</script>

<style lang="scss" scoped>
.often_use{
    margin-top:20px;
    width: 1036px;
    height:179px;
    background:#fff;
    padding:20px;
    > .el-row {
    height: 114px;
    width: 100%;
    > .el-col {
      height: 40px;
    .box{
         em{
           background-position:0 0;
           display: inline-block;
           width: 24px;
           height:24px;
           position: relative;
           top: 8px;
         }
       
    }
    }
  }

   img {
    height: 40px;
  }

  .pt1,
  .pt2 {
    height: 100%;
    width: 100%;
    padding-left:10px;
  }
  .pt1 {
    font-weight: 900;
  }
}
</style>