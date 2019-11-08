<template>
  <div class="study">
    <!-- 学习交流 -->
    <el-col :span="8" :push="0" style="font-size:20px;">学习交流</el-col>

    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="6">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="img icon"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1">在线论坛</p>
            <p class="pt2">百万商家互通互助</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="img icon"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1">线下培训</p>
            <p class="pt2">点击查看全国活动</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="img icon"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1">服务市场</p>
            <p class="pt2">服务商帮你经营</p>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="6">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="img icon"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1">在线课堂</p>
            <p class="pt2">资深专家视频授课</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="img icon"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1">本地商盟</p>
            <p class="pt2">加入本地商家联盟</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <em class="img icon"></em>
          <div style="display: inline-block;color:#333;position: relative;bottom: 5px;">
            <p class="pt1">服务市场</p>
            <p class="pt2">服务商帮你经营</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../../assets/css/icon.css";
export default {};
</script>

<style lang="scss" scoped>
.study {
  margin-top: 20px;
  width: 1036px;
  height: 221px;
  background: #fff;
  padding: 20px;
  > .el-row {
    height: 80px;
    width: 100%;
    > .el-col {
      height: 40px;
      // background: rgb(255, 142, 142);
      .box {
        .img {
          display: inline-block;
          width: 40px;
          height: 40px;
          background-position: 0 -90px;
          background-size: auto;
        }
      }
    }
  }

  // img {
  //   height: 40px;
  // }

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