<template>
  <div>
    <div class="ad">
      <el-col :span="8" :push="1" style="height:20%;font-size:20px;">最新推荐</el-col>
      <el-row type="flex" class="row-bg" justify="space-around" align="middle">
        <el-col :span="5">
          <p class="p1">多人拼团</p>
          <p class="p2">裂变式营销玩法</p>
        </el-col>
        <el-col :span="5">
          <p class="p1">百度小程序</p>
          <p class="p2">打造新官网</p>
        </el-col>

        <el-col :span="5">
          <p class="p1">分销市场</p>
          <p class="p2">一件上架,快速补充货源</p>
        </el-col>

        <el-col :span="5">
          <p class="p1">微信小程序</p>
          <p class="p2">裂变式营销玩法</p>
        </el-col>
      </el-row>
    </div>
    <div class="ad">
      <el-col :span="8" :push="1" style="height:20%;font-size:20px;">经营建议</el-col>
      <el-row type="flex" class="row-bg" justify="space-around" align="middle">
        <el-col style=" background: rgb(247, 248, 250);height:75%;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">加入分佣推广</p>
          <p style="color:#666;" class="p2">裂变式营销玩法</p>
        </el-col>
        <el-col style=" background: rgb(247, 248, 250);height:75%;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">快速回款</p>
          <p style="color:#666;" class="p2">打造新官网</p>
        </el-col>
        <el-col style=" background: rgb(247, 248, 250);height:75%;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">登月计划</p>
          <p style="color:#666;" class="p2">一件上架,快速补充货源</p>
        </el-col>
        <el-col style=" background: rgb(247, 248, 250);height:75%;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">爱逛直播算11</p>
          <p style="color:#666;" class="p2">裂变式营销玩法</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ad {
  width: 100%;
  height: 190px;
  margin-top: 20px;
  background: rgb(255, 255, 255);

  > .el-row {
    height: 80%;
    width: 100%;
    background: rgb(255, 255, 255);
    > .el-col {
      height: 80%;
      background: rgb(146, 166, 209);
      border-radius: 10px;
      .p1 {
        font-size: 21px;
        color: #fff;
      }
      .p2 {
        font-size: 14px;
        color: aliceblue;
      }
      .p1,
      .p2 {
        height: 50%;
        width: 100%;
        text-align: center;
        line-height: 270%;
      }
    }
  }
}
</style>