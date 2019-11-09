<template>
  <div class="more">
    <!-- 更多服务 -->
    <div class="ad2">
      <el-col :span="8" :push="0" style="height:10%;font-size:20px;">更多服务</el-col>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="2" v-for="(ele,idx) in list" :key="idx">
          <div class="img-box">
            <em
              class="icon"
              :style="ele.type!==1?{backgroundPosition:ele.p,...cssObj2}:{background:ele.p2,...cssObj}"
            ></em>
            <p v-text="ele.t"></p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { dingwei } from "@/assets/index";
import "@/assets/css/icon.css";
export default {
  data() {
    return {
      list: dingwei.iconP,
      cssObj: {
        backgroundSize: "contain",
        backgroundPosition: "22px 0",
        marginBottom: "10px",
        display: "block",
        width: "84px",
        height: "40px"
      },
      cssObj2: {
        display: "block",
        width: "84px",
        height: "40px",
        backgroundSize: "auto",
        marginBottom: "10px"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.more {
  margin-top: 20px;
  width: 1036px;
  height: 172px;
  background: #fff;
  padding: 20px;
  .ad2 {
    width: 100%;
    height: 150px;
    .el-row {
      width: 100%;
      height: 80%;
      > .el-col {
        height: 60px;
        background: rgb(255, 255, 255);
      }
    }
  }
  .img-box {
    text-align: center;
    height: 50%;
    font-size: 14px;
  }
}
</style>