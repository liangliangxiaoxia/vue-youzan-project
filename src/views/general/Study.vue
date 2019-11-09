<template>
  <div class="study">
    <!-- 学习交流 -->
    <el-col :span="8" :push="0" style="font-size:20px;">学习交流</el-col>

    <el-row type="flex" justify="space-between" align="middle" :style="{flexWrap:'wrap'}">
      <el-col :span="8" v-for="(ele) in list" :key="ele.id">
        <div class="box">
          <em class="icon" :style="{backgroundPosition:ele.p,...cssObj}"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1" v-text="ele.t1"></p>
            <p class="pt2" v-text="ele.t2"></p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "@/assets/css/icon.css";
import {dingwei} from '@/assets/index'
export default {
  data(){
    return{
      list:dingwei.iconP2,
      cssObj: {
        display: "inline-block",
        width: "40px",
        height: "40px",
        backgroundSize: "auto",
    }
    }
  }
  
};
</script>

<style lang="scss" scoped>
.study {
  margin-top: 20px;
  width: 1036px;
  height: 221px;
  background: #fff;
  padding: 20px;
  > .el-row {
    height: 144px;
    width: 100%;
    > .el-col {
      height: 40px;
    }
  }
  .pt1,
  .pt2 {
    height: 100%;
    width: 100%;
    padding-top: 2px;
    padding-left: 10px;
  }
  .pt1 {
    font-weight: 900;
  }
}
</style>