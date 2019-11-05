<template>
  <div class="order_bottom">
    <div class="nav">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first"></el-tab-pane>
    <el-tab-pane label="待付款" name="second"></el-tab-pane>
    <el-tab-pane label="代发货" name="third"></el-tab-pane>
    <el-tab-pane label="已发货" name="fourth"></el-tab-pane>
     <el-tab-pane label="已完成" name="sixth"></el-tab-pane>
      <el-tab-pane label="已关闭" name="seventh"></el-tab-pane>
       <el-tab-pane label="退款中" name="eighth"></el-tab-pane>
  </el-tabs>
    </div>

    <div class="fixd_bar">
      <div>
        <li>商品</li>
        <div class="fixd_bar_right">
          <li>单价(元) / 数量</li>
          <li>售后</li>
          <li>买家 / 收货人</li>
          <li>配送方式</li>
          <li>实收金额(元)</li>
          <li>订单状态</li>
        </div>
        <li>操作</li>
      </div>
    </div>

    <div class="order_list">
      <div class="order_list_center"></div>
    </div>

    <div class="order_pages">
      <div class="order_pages_one">
        共
        <span>0</span>条,每页
        <el-select v-model="value" placeholder="请选择" style="width:80px;height:100%,font-size:14px" size="small">
          <el-option style="width:80px;height:20px" 
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="order_pages_two">
        <button type="button">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button type="button">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <div class="order_pages_three">
        跳至
        <div >
          <input type="text" style="width:54px;height30px;padding:0 12px 0 12px;"/>
        </div>页
      </div>
    </div>


    <!-- https://img.yzcdn.cn/v2/image/www/footer/logov2.png -->
    <div class="order_bottom_logo">

    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        options: [{
          value: '选项1',
          label: '第一页'
        }, {
          value: '选项2',
          label: '第二页'
        }, {
          value: '选项3',
          label: '第三页'
        }, {
          value: '选项4',
          label: '第四页'
        }, {
          value: '选项5',
          label: '第五页'
        }],
        value: '',
         activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
      }
    
};
</script>

<style scoped lang="scss">
.order_bottom {
  .fixd_bar {
    margin-top: 20px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    background: #e5e9f2;
    div {
      margin: 0 10px 0 10px;
      display: flex;
      justify-content: space-between;
      .fixd_bar_right {
        display: flex;
        justify-content: space-between;
        width: 730px;
      }
    }
  }

  .order_bottom_logo{
    height:40px;
    background: url('https://img.yzcdn.cn/v2/image/www/footer/logov2.png') no-repeat center center;

  }

  .order_list {
    margin-top: 20px;
    width: 1264px;
    height: 212px;
    //   border: 1px solid #000;
    .order_list_center {
      width: 100%;
      height: 212.8px;
      padding: 30px 0;
      border: rgb(235, 237, 240) solid 1px;
      background: #fff;
    }
  }
  .order_pages {
    height: 32px;
    margin-top: 16px;
    // background: red;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    align-items: center;
    .order_pages_one {
      .order_pages_inpt{
        input{
          height: 30px;
          font-size: 12px;
        }
      }
    }
    .order_pages_two {
      margin-right: 10px;
      i {
        display: inline-block;
        text-align: center;
      }
      button {
        height: 30px;
        margin-left: 4px;
        padding: 0 8px;
        border: 1px solid rgb(247, 248, 250);
        text-align: center;
      }
    }
    .order_pages_three {
      display: flex;
      align-items: center;
      >div{
        margin-left: 10px;
      }
    }
  }
}
.nav {
  height: 50px;
  > div {
    height: 40px;
    
    padding-bottom: 1px;
  }
  ul {
    float: left;

    border-radius: 10px 10px 0 0;
    li {
      float: left;
  
      width: 88px;
      height: 38px;
      padding: 9px 16px 9px 16px;

      text-align: center;
      line-height: 20px;
      font-size: 14px;
      border: 1px solid #dcdee0;
    }
  }
}
.el-row {
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
</style>