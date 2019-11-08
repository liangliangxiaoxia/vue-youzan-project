<template>
    <div class="more">
        <!-- 更多服务 -->
        <div class="ad2">
      <el-col :span="8" :push="0" style="height:10%;font-size:20px;">更多推荐</el-col>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>零售</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>教育</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>美业</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>有赞精选</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>有赞担保</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>跨境服务</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>有赞分销</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>我要推广</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="img-box">
            <!-- <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt srcset /> -->
            <em class="img icon"></em>
            <p>广告投放</p>
          </div>
        </el-col>
      </el-row>
    </div>
    </div>
</template>

<script>
import '../../assets/css/icon.css'
export default {
    
}
</script>

<style lang="scss" scoped>
.more{
    margin-top:20px;
    width: 1036px;
    height:172px;
    background:#fff;
    padding:20px;
    .ad2 {
  width: 100%;
  height: 150px;
  .el-row {
    width: 100%;
    height: 80%;
    > .el-col {
      height: 60px;
      background: rgb(255, 255, 255);
    }
  }
}
.img-box {
  text-align: center;
  height: 50%;
  font-size: 14px;
  > img {
    width: 50%;
    margin-bottom: 10px;
  }

  .img{
     display:block;
     width:84px;
     height:40px;
     background-position:23px -330px;
     background-size:auto;
     margin-bottom: 10px;
  }
}
}
</style>