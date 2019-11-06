<template>
  <div class="Main">
    <div class="main-Nav">
      <!-- <el-row :gutter="20">
        <el-col :span="2">
          <span>销售中</span>
        </el-col>
        <el-col :span="2">
          <span>已售罄</span>
        </el-col>
        <el-col :span="2">
          <span>仓库中</span>
        </el-col>
      </el-row>-->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售中" name="first">销售中</el-tab-pane>
        <el-tab-pane label="已售罄" name="second">已售罄</el-tab-pane>
        <el-tab-pane label="仓库中" name="third">仓库中</el-tab-pane>
      </el-tabs>
    </div>
    <xiaoshou></xiaoshou>
  </div>
</template>

<script>
import xiaoshou from "./xiaoshou.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      activeName: ""
    };
  },
  components: {
    xiaoshou
  },
  methods: {
    ...mapActions(["getGoodsArr"]),
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.getGoodsArr();
  }
};
</script>

<style lang="scss" scoped>
.Main {
  margin: 20px 20px;
  background: rgb(247, 248, 250);
  height: 100%;
  font-size: 14px;

}
</style>