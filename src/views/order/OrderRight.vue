<template>
  <div class="order_right">
    <!-- 头部 -->
    <header>
      <div class="order_serch">
        <span>订单查询</span>
      </div>
      <div class="order_serch_right">
        <div>
          <i class="el-icon-s-custom"></i>
        </div>
        <p>
          <em class="el-icon-s-opportunity"></em>
          <span>帮助和服务</span>
        </p>
      </div>
    </header>

    <!-- 中间 -->
    <section>
      <div class="app">
        <div class="order_query_list">
          <form action>
           <DrowBtn></DrowBtn>
          </form>
        </div>
      <div class="order_nav">
            <OrderNav ></OrderNav>
      </div>
      </div>
    </section>

    <!-- 脚部 -->
    <footer></footer>
  </div>
</template>

<script>
import DrowBtn from './DrowBtn.vue'
import OrderNav from './OrderNav.vue'
import { mapActions } from 'vuex'
export default {
    components:{
        DrowBtn,
        OrderNav
    },
    computed:{
        
    },
    mounted (){
        this.getorderdetails()
    },
    methods:{
      ...mapActions(['getorderdetails'])
    }
   
};
</script>

<style scoped lang="scss">
.order_right {
  margin-bottom: 70px;
  padding-left: 131px;
  //   background: red;
  width: 100%;
  height: 100%;

  //头部
  header {
    width: 100%;
    height: 56px;
    // background: blue;
    padding: 0 100px 1px 5px;
    line-height: 56px;
    border-bottom: 1px solid #ebedf0;
    .order_serch {
      font-size: 14px;
      float: left;
    }
    .order_serch_right {
      float: right;
      font-size: 14px;
      > div {
        text-align: center;
        line-height: 30px;
        margin-top: 10px;
        display: inline-block;
        width: 50px;
        height: 30px;
        border: 1px solid #ebedf0;
        cursor: pointer;
      }
      > p {
        margin-left: 30px;
        float: right;
        span {
          margin-left: 10px;
        }
      }
    }
  }

  //中间部分
  section {
    padding: 16px;
    width: 100%;
    background: rgb(247, 248, 250);
    height: 689px;
    margin-bottom: 100px;
    .app {
      height: 600px;
      background: #fff;
      .order_query_list {
        width: 1264px;
        height: 303px;
        background: rgb(247, 248, 250);
        border: #fff solid 16px;
        //   padding: 16px;
        > form {
          padding: 16px;
        }
        
      }
    }
    .order_nav{
        margin-top: 100px;
    }
  }

  //行内快元素
  .inline_blcok {
    display: inline-block;
  }

  // 栅格系统
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>