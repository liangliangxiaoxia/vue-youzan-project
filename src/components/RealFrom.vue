<template>
    <div class="real_from">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple box">
              <p>支付订单数</p>
              <p>
                <span>0</span>
              </p>
              <p>
                <span>昨日：</span>
                <span>0</span>
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple box">
              <p>支付金额(元)</p>
              <p>
                <span>0.00</span>
              </p>
              <p>
                <span>昨日：</span>
                <span>0.00</span>
              </p>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple box">
              <p>浏览量</p>
              <p>
                <span>2</span>
              </p>
              <p>
                <span>昨日：</span>
                <span>7</span>
              </p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple box">
              <p>累计客户数</p>
              <p>
                <span>0</span>
              </p>
              <p>
                <span>昨日：</span>
                <span>0</span>
              </p>
            </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props:{
        item:Object,
    }
}
</script>

<style lang="scss" scoped>
.real_from{
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
        .box{
            height:85px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
        }
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