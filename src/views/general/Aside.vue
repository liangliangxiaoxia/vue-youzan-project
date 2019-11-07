<template>
  <div class="aside">
    <div class="box pk">
      <a href>
        <img
          src="https://img.yzcdn.cn/upload_files/2019/11/05/Fi7qTB03SZ6et8qW6Cy0kMar-S4x.png"
          alt
        />
      </a>
    </div>

    <div class="box on_line">
      <a href>
        <div>
          <img src="https://img.yzcdn.cn/v4/imgs/dashboard/headset.png" alt />
        </div>
        <div>
          <p>在线客服</p>
          <p>电话：0571 - 8998 8848</p>
        </div>
      </a>
    </div>

    <div class="box electron">
      <a href>
        <div>
          <div>
            <img src="https://img.yzcdn.cn/v4/imgs/dashboard/desktop.png" alt />
          </div>
          <div>
            <p>桌面在线客服</p>
            <p>即时应答客户在线咨询</p>
          </div>
        </div>

        <div>
          <div>
            <img src="https://img.yzcdn.cn/v4/imgs/dashboard/mobile.png" alt />
          </div>
          <div>
            <p>移动客户端</p>
            <p>使用手机、Pad管理店铺</p>
          </div>
        </div>
      </a>
    </div>

    <div class="box dynamic">
      <div>
        <h2><span>产品动态</span><a href style="font-size:12px;color:#155BD4;margin-left:10px;">更多</a></h2>
      </div>

      <div>
        <p>
          <a href>
            <span>10/31 个性化推荐商品功能优化</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/25 店铺笔记新增首页概况</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/25 教育支持单校区升多校区</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/24 一卡一码下单兑换规则变更</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/24 微商城店铺服务分上线</span>
          </a>
        </p>
      </div>
    </div>

    <div class="box stories">
        <div>
        <h2><span>有赞头条</span></h2>
      </div>

      <div>
        <p>
          <a href>
            <span class="d40">[干货] 11.11社交电商作战攻略</span>
          </a>
        </p>
        <p>
          <a href>
            <span>[公告] 快手小店上传有赞商品需审核</span>
          </a>
        </p>
        <p>
          <a href>
            <span>[资讯] 贝塔来信第1封-有赞崔玉松</span>
          </a>
        </p>
        <p>
          <a href>
            <span>[报名] 有赞商盟第四届赞交会</span>
          </a>
        </p>
        <p>
          <a href>
            <span>[资讯] 诚邀参加有赞1127七周年</span>
          </a>
        </p>
      </div>
    </div>

    <div class="box activity">
        <div>
        <h2><span>产品动态</span><a href style="font-size:12px;color:#155BD4;margin-left:10px;">更多</a></h2>
      </div>

      <div>
        <p>
          <a href>
            <span>10/31 广州 中国品牌营销峰会</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/25 上海 亚洲果蔬博览会</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/25 广州 短视频直播电商风向论坛</span>
          </a>
        </p>
        <p>
          <a href>
            <span>10/24 北京 短视频直播电商风向论坛</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.aside {
  width: 231px;
  height: 1726px;
  position: absolute;
  right: -50px;
  top: 20px;
  .box {
    margin-bottom: 20px;
  }
  .pk {
    width: 100%;
    height: 154px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .on_line {
    width: 100%;
    height: 80px;
    background: #fff;
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 16px;
      div:nth-child(1) {
        display: inline-block;
        width: 20%;
        img {
          display: inline-block;
          width: 40px;
          height: 40px;
          position: relative;
          bottom: 24px;
        }
      }
      div:nth-child(2) {
        display: inline-block;
        width: 80%;
        padding-left: 16px;
        p:nth-child(1) {
          font-size: 16px;
          color: #323233;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #646566;
          margin-top: 5px;
        }
      }
    }
  }
  .electron {
    width: 100%;
    height: 158px;
    background: #fff;
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 16px;
      > div:nth-child(1) {
        div:nth-child(1) {
          display: inline-block;
          width: 20%;
          img {
            display: inline-block;
            width: 40px;
            height: 40px;
            position: relative;
            bottom: 24px;
          }
        }
        div:nth-child(2) {
          display: inline-block;
          width: 80%;
          padding-left: 16px;
          p:nth-child(1) {
            font-size: 16px;
            color: #323233;
          }
          p:nth-child(2) {
            font-size: 12px;
            color: #646566;
            margin-top: 5px;
          }
        }
      }

      > div:nth-child(2) {
        margin-top: 10px;
        div:nth-child(1) {
          display: inline-block;
          width: 20%;
          img {
            display: inline-block;
            width: 40px;
            height: 40px;
            position: relative;
            bottom: 24px;
          }
        }
        div:nth-child(2) {
          display: inline-block;
          width: 80%;
          padding-left: 16px;
          p:nth-child(1) {
            font-size: 16px;
            color: #323233;
          }
          p:nth-child(2) {
            font-size: 12px;
            color: #646566;
            margin-top: 5px;
          }
        }
      }
    }
  }
  .dynamic {
    width: 100%;
    height: 196px;
    background: #fff;
    padding:16px;
    > div:nth-child(1){
         margin-bottom:14px;
    }

    > div:nth-child(2){
         p{
            line-height:24px;
         }
    }
  }
  .stories {
    width: 100%;
    height: 196px;
    background: #fff;
    padding:16px;
    .d40{
        color:#D40000;
    }
    > div:nth-child(1){
         margin-bottom:14px;
    }
    > div:nth-child(2){
         p{
            line-height:24px;
         }
    }
  }
  .activity {
    width: 100%;
    height: 172px;
    background: #fff;
    padding:16px;
    > div:nth-child(1){
        margin-bottom:14px;
    }
    > div:nth-child(2){
         p{
            line-height:24px;
         }
    }
  }
}
</style>