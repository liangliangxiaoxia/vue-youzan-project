<template>
    <div class="recommend">
        <!-- 最新推荐 -->
        <div class="ad">
      <el-col :span="8" :push="0" style="font-size:20px;margin-bottom:10px">最新推荐</el-col>
      <el-row type="flex" class="row-bg" justify="space-between" align="middle">
        <el-col :span="5" style="background: #8fcf8f;">
          <p class="p1">多人拼团</p>
          <p class="p2">裂变式营销玩法</p>
        </el-col>
        <el-col :span="5" style="background: #8fbdd0;">
          <p class="p1">百度小程序</p>
          <p class="p2">打造新官网</p>
        </el-col>

        <el-col :span="5" style="background: #849bd0;">
          <p class="p1">分销市场</p>
          <p class="p2">一件上架,快速补充货源</p>
        </el-col>

        <el-col :span="5" style="background: #a984d0;">
          <p class="p1">微信小程序</p>
          <p class="p2">裂变式营销玩法</p>
        </el-col>
      </el-row>
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.recommend{
    margin-top:20px;
    width: 1036px;
    height:198px;
    background:#fff;
    padding:20px;
    .ad {
  width: 100%;
  height: 100%;
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
}
</style>