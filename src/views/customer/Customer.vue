<template>
<div class="customer">
        <LeftNav></LeftNav>
        <Left></Left>
   <el-container>
     <el-header><Header></Header></el-header>
     <el-main><Main></Main></el-main>
     <el-footer>Footer</el-footer>
   </el-container>
   
</div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import Header from './Header.vue'
import Left from './Left.vue'
import Main from './Main.vue'
export default {
    components:{
        LeftNav,
        Header,
        Left,
        Main
    }
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #fff;;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding-left: 230px;
  }
  .el-main {
    // background-color: red;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding-left: 230px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
</style>