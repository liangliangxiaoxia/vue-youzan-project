<template>
  <div class="general">
    <!-- 路由 -->
    <LeftNav></LeftNav>
    <!-- 头部 -->
    <GeneralHeader></GeneralHeader>
    <!-- 主体部分 -->
    <div class="main">
      <!-- 实时概况 -->
      <RealTime></RealTime>
      <!-- 智能助手 -->
      <Mind></Mind>
    </div>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import GeneralHeader from "./GeneralHeader";
import RealTime from "./RealTime";
import Mind from "./Mind";
export default {
  components: {
    LeftNav,
    GeneralHeader,
    RealTime,
    Mind
  }
};
</script>

<style lang="scss" scoped>
.general {
  padding-left: 92px;
  background: rgb(247, 248, 250);
  height: 100%;
  .main{
    padding-top:20px;
    padding-left:20px;
  }
}
</style>