<template>
  <div class="left-nav">
    <ul>
      <router-link to="/general" activeClass="white">
        <li>概况</li>
      </router-link>

      <router-link to="/goods" activeClass="white">
        <li>商品</li>
      </router-link>

      <router-link to="/order" activeClass="white">
        <li>订单</li>
      </router-link>

      <router-link to="/customer" activeClass="white">
        <li>客户</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left-nav {
  z-index: 999999;
  height: 100%;
  width: 92px;
  background: #444;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  ul {
    a{
      display:block;
      height: 40px;
    }
    li {
      color: #c8c9cc;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      padding-left: 26px;
    }
    .white{
        background:#fff;
        li{
           color:#333;
        }
    }
  }
}
</style>