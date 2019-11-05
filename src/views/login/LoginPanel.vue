<template>
  <div class="login-panel">
    <!-- 头部 -->
    <div class="login_title">
        <h2>密码登录</h2>
        <h2>验证码登录</h2>
    </div>
    <!-- 表单部分 -->
    <div class="from">
      <div>
        <el-select v-model="value" placeholder="请选择" class="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="input" placeholder="注册时填写的手机号" class="username"></el-input>
      </div>
      <el-input placeholder="请输入密码" v-model="input" show-password class="password"></el-input>
      <div class="checked1">
        <el-checkbox v-model="checked">三天内自动登录</el-checkbox>
      </div>
      <el-button type="primary" class="primary">登录</el-button>
      <div>
        <span>
          <el-checkbox v-model="checked">
            已阅读并同意
            <a href>《用户使用协议》</a>
          </el-checkbox>
        </span>

        <span style="float:right;">
          <a href style="margin-right:10px;">忘记密码</a>
          <a href>免费注册</a>
        </span>
      </div>
    </div>
      
    <!-- 背景图片 -->
    <div class="login_img">
        <img :src="imgs.login_img" alt="">
    </div>
  </div>
</template>

<script>
import {imgs} from '@/assets/index'
export default {
  data() {
    return {
      imgs,
      input: "",
      options: [
        {
          value: "选项1",
          label: "中国+86"
        },
        {
          value: "选项2",
          label: "阿根廷+54"
        },
        {
          value: "选项3",
          label: "爱艾兰+354"
        }
      ],
      value: "中国+86",
      checked: true
    };
  }
};
</script>

<style lang="scss" scoped>
.login-panel {
  margin-top:50px;
  width: 410px;
  height: 360px;
  background:#fff;
  box-shadow: 1px 1px 4px #999;
  padding-top:20px;
//   标题
.login_title{
    width:350px;
    margin:0 auto;
    margin-bottom:30px;
    h2{
       display:inline-block;
       margin-top:20px;
    }
    h2:nth-child(2){
       margin-left:10px;
       color:#999;
    }
}
//  表单
  .from {
    width:350px;
    margin:0 auto;
    div {
      .select {
        width: 100px;
      }
    }
    .checked1 {
      margin-top: 20px;
    }
    .username {
      width: 250px;
    }
    .primary {
      width: 100%;
      margin: 20px 0;
    }
  }

  .login_img{
      width:400px;
      height:333px;
      position:absolute;
      right:0;
      top:160px;
      img{
         width:380px;
         height:307px;
      }
  }
}
</style>