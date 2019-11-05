<template>
  <div class="mind">
    <!-- 左 -->
    <div class="left">
      <h2>智能助手</h2>
      <div class="left_img_box">
        <img src alt />
        <span>去处理</span>
      </div>
    </div>
    <!-- 右 -->
    <div class="right">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部事项" name="a">全部事项</el-tab-pane>
        <el-tab-pane label="店铺基础" name="b">店铺基础</el-tab-pane>
        <el-tab-pane label="商品体验" name="c">商品体验</el-tab-pane>
        <el-tab-pane label="物流体验" name="d">物流体验</el-tab-pane>
        <el-tab-pane label="售后体验" name="e">售后体验</el-tab-pane>
        <el-tab-pane label="服务体验" name="f">服务体验</el-tab-pane>
        <el-tab-pane label="流量表现" name="g">流量表现</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.mind {
  margin-top: 20px;
  width: 1036px;
  height: 340px;
  background: #fff;
  padding: 20px;
  .left {
    width: 233px;
    height: 300px;
    border-right: 1px solid #e5e5e5;
    float: left;
  }
  .right {
    float: right;
    width: 728px;
    height: 300px;
  }
}
</style>