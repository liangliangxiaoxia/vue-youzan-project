<template>
    <div class="proposal">
        <!-- 经营建议 -->
        <div class="ad">
      <el-col :span="8" :push="0" style="font-size:20px;">经营建议</el-col>
      <el-row type="flex" class="row-bg" justify="space-between" align="middle">
        <el-col style=" background: rgb(247, 248, 250);height:117px;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">加入分佣推广</p>
          <p style="color:#666;" class="p2">裂变式营销玩法</p>
        </el-col>
        <el-col style=" background: rgb(247, 248, 250);height:117px;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">快速回款</p>
          <p style="color:#666;" class="p2">打造新官网</p>
        </el-col>
        <el-col style=" background: rgb(247, 248, 250);height:117px;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">登月计划</p>
          <p style="color:#666;" class="p2">一件上架,快速补充货源</p>
        </el-col>
        <el-col style=" background: rgb(247, 248, 250);height:117px;border-radius:0px" :span="5">
          <p style="color:#666;" class="p1">爱逛直播算11</p>
          <p style="color:#666;" class="p2">裂变式营销玩法</p>
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
.proposal{
    margin-top:20px;
    width: 1036px;
    height:193px;
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
    padding-top: 20px;
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