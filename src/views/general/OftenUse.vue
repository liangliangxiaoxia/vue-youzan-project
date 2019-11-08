<template>
    <div class="often_use">
        <!-- 常用功能 -->
         <el-col :span="4" :push="0" style="font-size:20px;">常用功能</el-col>

    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">发布商品</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">分销员</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">多网点</p>
          </div>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">小程序</p>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">微信公众号</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">收入/体现</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">智能客服</p>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="box">
          <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
          <div style="display:inline-block;width:30px;height:30px;background:rgb(0, 191, 86);border-radius:4px;padding:6px">
              <i class="fa fa-weixin" aria-hidden="true" style="font-size:16px;color:#fff;"></i>
          </div>
          <div style="display: inline-block;color:#333;">
            <p class="pt1">订单查询</p>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
</template>

<script>
import "../../assets/css/icon.css";
export default {
    
}
</script>

<style lang="scss" scoped>
.often_use{
    
    margin-top:20px;
    width: 1036px;
    height:179px;
    background:#fff;
    padding:20px;
    > .el-row {
    height: 80px;
    width: 100%;
    > .el-col {
      height: 40px;
    //   background: rgb(255, 142, 142);
    }
  }

   img {
    height: 40px;
  }

  .pt1,
  .pt2 {
    height: 100%;
    width: 100%;
    padding-top:12px;
    padding-left:10px;
  }
  .pt1 {
    font-weight: 900;
  }
}
</style>