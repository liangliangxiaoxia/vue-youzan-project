<template>
  <div class="general_header">
    <div class="header_left">
      <h3 class>凉凉小夏</h3>
      <span class="blue">试用期</span>
      <span>SVIP</span>
      <span>有赞担保</span>
    </div>

    <div class="header_right">
      <span>
        <img :src="imgs.boshimao" alt />
      </span>
      <!-- <span>
                 <i class="fa fa-user-circle-o i1" aria-hidden="true"></i>
                 <span>13129510861</span>
                 <i class="fa fa-angle-right i2" aria-hidden="true"></i>
      </span>-->

      <el-dropdown>
        <span class="el-dropdown-link">
          13129510861
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>切换店铺</el-dropdown-item>
          <el-dropdown-item>凉凉小夏</el-dropdown-item>
          <el-dropdown-item>有赞首页</el-dropdown-item>
          <el-dropdown-item disabled>+86-13129510861</el-dropdown-item>
          <div @click="logout"><el-dropdown-item divided >退出登陆</el-dropdown-item></div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { imgs } from "@/assets/index";
export default {
  data() {
    return {
      imgs
    };
  },
  methods:{
    // 退出登陆
    logout(){
        console.log(10)
        localStorage.removeItem('login');
        // 跳转到登陆页
        this.$router.replace('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.general_header {
  background: #fff;
  height: 56px;
  width: 100%;
  line-height: 56px;
  padding: 0 20px;
  .header_left {
    float: left;
    h3 {
      padding-left: 20px;
      display: inline;
      font-size: 20px;
      font-weight: bold;
      position: relative;
      top: 2px;
    }
    span {
      border: 1px solid #999;
      border-radius: 3px;
      margin-left: 5px;
      padding: 3px;
    }
    .blue {
      color: #155bd4;
      border: 1px solid #155bd4;
    }
  }
  .header_right {
    float: right;

    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
    > span:nth-child(1) {
      margin-right: 40px;
      img {
        width: 40px;
        height: 32px;
        margin-top: 12px;
      }
    }
    > span:nth-child(2) {
      .i1 {
        font-size: 20px;
        color: #999;
        position: relative;
        top: 3.5px;
      }
      span {
        margin: 0 10px;
      }
      .i2 {
        font-size: 16px;
        color: #999;
      }
    }
    padding-right: 20px;
  }
}
</style>