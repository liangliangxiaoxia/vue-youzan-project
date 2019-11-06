<template>
  <div class="mind">
    <!-- 左 -->
    <div class="left">
      <h2>智能助手</h2>
      <div class="left_img_box">
        <img src alt />
        <span>去处理</span>
      </div>
    </div>
    <!-- 右 -->
    <div class="right">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部事项" name="a">
          <div class="box">
            <div class="top" v-if="mindArr && mindArr[0]">
              <div v-for="(ele,idx) in mindArr[0].data" :key="idx">
                <span v-text="ele.name"></span>
                <span v-text="ele.num">0</span>
              </div>
            </div>

            <div class="bottom" v-if="mindArr && mindArr[0]">
              <div v-for="(ele,idx) in mindArr[0].data2" :key="ele.id">
                <div v-if="idx < 10">
                  <span>
                    <img :src="ele.i" alt />
                  </span>
                  <span v-text="ele.a"></span>
                  <span v-text="ele.b"></span>
                  <span v-text="ele.c"></span>
                </div>

                <div v-if="idx > 9 && idx < mindArr[0].data2.length">
                  <span>
                    <img :src="ele.i" alt />
                  </span>
                  <span v-text="ele.a"></span>
                  <span v-text="ele.b"></span>
                  <span v-text="ele.c"></span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="店铺基础" name="b">
          <div class="box">
            <div class="bottom" v-if="mindArr && mindArr[1]">
              <div v-for="(ele) in getArr1" :key="ele.id">
                  <span>
                    <img :src="ele.i" alt />
                  </span>
                  <span v-text="ele.a"></span>
                  <span v-text="ele.b"></span>
                  <span v-text="ele.c"></span>
              </div>
              
              <div class="xian">
                 <em></em>
              </div>
              
              <div v-for="(ele) in getArr2" :key="ele.id">
                  <span>
                    <img :src="ele.i" alt />
                  </span>
                  <span v-text="ele.a"></span>
                  <span v-text="ele.b"></span>
                  <span v-text="ele.c"></span>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品体验" name="c">
          <div class="box">
            <div class="bottom" v-if="mindArr && mindArr[2]">
              <div v-for="(ele) in mindArr[2].data" :key="ele.id">
                <span>
                  <img :src="ele.i" alt />
                </span>
                <span v-text="ele.a"></span>
                <span v-text="ele.b"></span>
                <span v-text="ele.c"></span>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="物流体验" name="d">
          <div class="box2" v-if="mindArr && mindArr[3]">
            <div>
              <h2>
                <img :src="mindArr[3].icon" alt />
                <span v-text="mindArr[3].name"></span>
              </h2>
              <p v-text="mindArr[3].nameNo"></p>
            </div>

            <div>
              <div class="mini_box" v-for="(ele) in mindArr[3].data" :key="ele.id">
                <div>
                  <a href v-text="ele.a"></a>
                </div>
                <div>
                  <a href v-text="ele.b"></a>
                  <img :src="ele.c" alt />
                </div>
              </div>

              <a href class="gengduo">
                <p v-text="mindArr[3].gengduo"></p>
                <p v-text="mindArr[3].dian"></p>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="售后体验" name="e">
          <div class="box2" v-if="mindArr && mindArr[4]">
            <div>
              <h2>
                <img :src="mindArr[4].icon" alt />
                <span v-text="mindArr[4].name"></span>
              </h2>
              <p v-text="mindArr[4].nameNo"></p>
            </div>

            <div>
              <div class="mini_box" v-for="(ele) in mindArr[4].data" :key="ele.id">
                <div>
                  <a href v-text="ele.a"></a>
                </div>
                <div>
                  <a href v-text="ele.b"></a>
                  <img :src="ele.c" alt />
                </div>
              </div>

              <a href class="gengduo">
                <p v-text="mindArr[4].gengduo"></p>
                <p v-text="mindArr[4].dian"></p>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服务体验" name="f">
          <div class="box2" v-if="mindArr && mindArr[5]">
            <div>
              <h2>
                <img :src="mindArr[5].icon" alt />
                <span v-text="mindArr[5].name"></span>
              </h2>
              <p v-text="mindArr[5].nameNo"></p>
            </div>

            <div>
              <div class="mini_box" v-for="(ele) in mindArr[5].data" :key="ele.id">
                <div>
                  <a href v-text="ele.a"></a>
                </div>
                <div>
                  <a href v-text="ele.b"></a>
                  <img :src="ele.c" alt />
                </div>
              </div>

              <a href class="gengduo">
                <p v-text="mindArr[5].gengduo"></p>
                <p v-text="mindArr[5].dian"></p>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="流量表现" name="g">
          <div class="box">
            <div class="bottom" v-if="mindArr && mindArr[6]">
              <div v-for="(ele) in mindArr[6].data" :key="ele.id">
                <span>
                  <img :src="ele.i" alt />
                </span>
                <span v-text="ele.a"></span>
                <span v-text="ele.b"></span>
                <span v-text="ele.c"></span>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeName: "a"
    };
  },
  computed: {
    ...mapState(["mindArr"]),
    getArr1(){
      return this.mindArr[1].data.slice(0,6);
    },
    getArr2(){
      return this.mindArr[1].data.slice(6);
    }
  },
  methods: {
    ...mapActions(["getMind"]),
    handleClick() {
      // console.log(tab, event);
    }
  },
  mounted() {
    this.getMind();
  }
};
</script>

<style lang="scss" scoped>
.mind {
  margin-top: 20px;
  width: 1000px;
  height: 340px;
  background: #fff;
  padding: 20px;
  .left {
    width: 200px;
    height: 300px;
    border-right: 1px solid #e5e5e5;
    float: left;
  }
  .right {
    float: right;
    width: 728px;
    height: 300px;
    .box {
      width: 728px;
      height: 250px;
      overflow: auto;
      .xian{
            width:100%;
            padding-left:20px;
            em{
             height:1px;
             background:#e0e0e0;
             display:block;
            }
          }
      .top {
        width: 711px;
        height: 88px;
        padding: 16px 16px 16px 0;
        background: #f7f8fa;
        div {
          display: inline-block;
          width: 220px;
          padding-left: 50px;
          margin-bottom: 16px;
          span:nth-child(1) {
            font-size: 14px;
            color: #323233;
            margin-right: 10px;
          }
          span:nth-child(2) {
            font-size: 16px;
            color: #df4545;
            font-weight: bold;
          }
        }
      }

      .bottom {
        div {
          margin: 14px 0;
          clear: right;
          span:nth-child(1) {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-right: 10px;
            img {
              width: 16px;
              height: 16px;
            }
          }
          span:nth-child(2) {
            color: #000;
            font-size: 14px;
          }
          span:nth-child(3) {
            color: #969799;
            margin-left: 10px;
          }
          span:nth-child(4) {
            float: right;
            color: #155bd4;
          }
        }
      }
    }

    .box2 {
      width: 728px;
      height: 250px;
      overflow: auto;
      > div:nth-child(1) {
        text-align: center;
        margin: 34px 0 40px;
        h2 {
          font-size: 16px;
          color: #000;
        }
        p {
          margin-top: 3px;
          color: #666;
          font-size: 14px;
        }
      }
      > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        .mini_box {
          // float:left;
          width: 194px;
          height: 116px;
          border: 1px solid #efefef;
          padding: 16px 10px 10px 16px;
          > div:nth-child(1) {
            width: 118px;
            height: 40px;
            a {
              color: #323233;
              font-size: 14px;
            }
          }

          > div:nth-child(2) {
            clear: right;
            a {
              display: inline-block;
              margin-top: 24px;
              font-size: 14px;
              color: #155bd4;
            }
            img {
              width: 40px;
              height: 40px;
              float: right;
              margin-top: 10px;
            }
          }
        }

        .gengduo {
          // float:left;
          display: block;
          width: 90px;
          height: 118px;
          border: 1px solid #efefef;
          padding: 16px;
          color: #3388ff;
          text-align: center;
          p:nth-child(1) {
            margin-top: 28px;
          }
        }
      }
    }
  }
}
</style>