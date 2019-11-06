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
      <!-- 常用功能 -->
      <OftenUse></OftenUse>
      <!-- 最新推荐 -->
      <Recommend></Recommend>
      <!-- 经营建议 -->
      <Proposal></Proposal>
      <!-- 学习交流 -->
      <Study></Study>
      <!-- 更多服务 -->
      <More></More>
      <!-- 右边 -->
      <Aside></Aside>
    </div>
    <!-- 底部 -->
    <div class="footer">
        <div><img :src="imgs.youzanicon" alt=""></div>
    </div>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import GeneralHeader from "./GeneralHeader";
import RealTime from "./RealTime";
import Mind from "./Mind";
import OftenUse from "./OftenUse";
import Recommend from "./Recommend";
import Proposal from "./Proposal";
import Study from "./Study";
import More from "./More";
import Aside from "./Aside";
import {imgs} from '@/assets/index'
export default {
  data(){
    return{
      imgs,
    }
  },
  components: {
    LeftNav,
    GeneralHeader,
    RealTime,
    Mind,
    OftenUse,
    Recommend,
    Proposal,
    Study,
    More,
    Aside
  }
};
</script>

<style lang="scss" scoped>
.general {
  padding-left: 92px;
  background: rgb(247, 248, 250);
  height: 100%;
  overflow: auto;
  .main{
    padding-top:20px;
    padding-left:20px;
    position:relative;
  }
  .footer{
    margin:20px 0;
    div{
      text-align:center;
    }
  }
}
</style>