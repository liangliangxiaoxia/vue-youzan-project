<template>
  <div class="login">
      <!-- 头部 -->
    <div class="login-height">
      <div>
        <a href="//www.youzan.com"></a>
        <em></em>
        <span>登录</span>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main">
        <!-- 表单 -->
        <LoginPanel></LoginPanel>
    </div>
    <!-- 底部 -->
    <div style="text-align:center;margin-top: 50px;">
        <p>© 2012 - 2019 Youzan.com</p>
    </div>
  </div>
</template>

<script>
import { icon } from "@/assets/index";
import LoginPanel from './LoginPanel'
export default {
  data() {
    return {
      icon
    };
  },
  components:{
      LoginPanel
  }
};
</script>

<style lang="scss" scoped>

.login {
  width: 900px;
  margin: 0 auto;
  position:relative;
  .login-height {
    border-bottom: 1px solid #e5e5e5;
    padding: 50px 0 45px;
    height: 24px;
    div{
        em{
          display:inline-block;
          width:1px;
          height:18px;
          background:#e8e8e8;
          margin:0 10px;
          position:relative;
          top:4px;
        }
        a{
            display:inline-block;
            background:url('../../assets/img/youzanicon.png');
            width:70px;
            height:24px;
        }
        span{
            font-size:16px;
        }
    }
  }
}
</style>