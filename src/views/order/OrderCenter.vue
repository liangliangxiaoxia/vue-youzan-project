<template>
  <div class="order_center">
    <div class="order_list">
      <span class="order_title">订单管理</span>
      <div class="order_drop">
        <el-collapse >
          <el-collapse-item>
            <template slot="title">交易查询</template>
            <div class="order_drop_one">订单查询</div>
            <div class="order_drop_one">分销采购单</div>
            <div class="order_drop_one">分销供货单</div>
          </el-collapse-item>
          <el-collapse-item title="订单处理">
            <div class="order_drop_one">快速打单</div>
            <div class="order_drop_one">批量发货</div>
            <div class="order_drop_one">退款维权</div>
            <div class="order_drop_one">批量退款</div>
            <div class="order_drop_one">评价管理</div>
          </el-collapse-item>
          <el-collapse-item title="配送服务">
            <div class="order_drop_one">上门自提</div>
            <div class="order_drop_one">同城配送</div>
            <div class="order_drop_one">快速发货</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <span class="order_trading">交易设置</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.order_center {
  background: #fff;
  z-index: 999999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 92px;
  width: 131px;
  height: 100%;
  border-right: 1px solid #ebedf0;
  .order_list {
    .order_title {
      display: inline-block;
      height: 55px;
      width: 103px;
      padding-left: 28px;
      line-height: 55px;
      margin-bottom: 1px;
      box-sizing: border-box;

      color: #323233;
      font-weight: 500;
      font-size: 14px;
    }
    .order_drop {
      padding: 0 20px 0 12px;
      margin-bottom: 30px;
      //    border-bottom: 1px solid #ebedf0;
      .order_drop_one{
          height: 30px;
          display: inline-block;
          text-align: center;
          line-height: 30px;
      }
    }
    .order_trading{
        display: inline-block;
        width: 108px;
        font-size: 14px;
        cursor: pointer;
        color: #323233;
        height: 30px;
        text-align: center;
    }
  }
}
</style>