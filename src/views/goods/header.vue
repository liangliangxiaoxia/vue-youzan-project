<template>
  <div class="Header">
    <el-row :gutter="20">
      <el-col :span="2" :offset="0">
        <div class="grid-content bg-purple">商品列表</div>
      </el-col>
      <el-col :span="2" :offset="20">
        <div class="grid-content bg-purple el-icon-share box2"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Header {
  height: 56px;
  line-height: 56px;
  font-size: 16px;
  color: #ccc;
  margin: 0 20px;
  div {
    text-align: center;
  }
  .box2 {
    width: 42px;
    height: 30px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 30px;
    color: #ccc;
  }
}
</style>