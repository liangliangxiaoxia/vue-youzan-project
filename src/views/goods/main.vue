<template>
  <div class="Main">
    <div class="main-Nav">
      <!-- <el-row :gutter="20">
        <el-col :span="2">
          <span>销售中</span>
        </el-col>
        <el-col :span="2">
          <span>已售罄</span>
        </el-col>
        <el-col :span="2">
          <span>仓库中</span>
        </el-col>
      </el-row>-->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售中" name="first" >销售中</el-tab-pane>
        <el-tab-pane label="已售罄" name="second">已售罄</el-tab-pane>
        <el-tab-pane label="仓库中" name="third">仓库中</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <span class="issue">发布商品</span>
    </div>

    <div class="classify">
      <!-- 商品分类栏 -->
      <el-row :gutter="20" class="classify-one" justify="center">
        <el-col :span="6" :offset="2">
          <span>商品名称或编码：</span>
          <input class="inp1" type="text" />
        </el-col>

        <el-col :span="6">
          <span>商品分组：</span>
          <span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in Commodity_Group"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
          </span>
        </el-col>

        <el-col :span="6">
          <span>商品类型：</span>
          <span>
            <span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in Goods_Category"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>
            </span>
          </span>
        </el-col>
      </el-row>
    </div>

    <!-- 销量栏 -->
    <el-row :gutter="20" class="classify-tow" justify="center">
      <el-col :span="6" :offset="4" class="cnm">
        <span>总销量：</span>
        <input type="text" class="inp2" style="height: 30px;
            width: 60px;" />
        <span>&nbsp;—&nbsp;</span>
        <input type="text" class="inp2" style="height: 30px;
            width: 60px;" />
      </el-col>

      <el-col :span="4">
        <span>价格：</span>
        <input type="text" class="inp2" style="height: 30px;
            width: 60px;" />
        <span>&nbsp;—&nbsp;</span>
        <input type="text" class="inp2" style="height: 30px;
            width: 60px;" />
      </el-col>

      <el-col :span="8">
        <span>库存扣减方式：</span>
        <span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in inventory"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </span>
      </el-col>
    </el-row>

    <!-- 筛选栏 -->

    <el-row :gutter="20" class="classify-three">
      <el-col :span="3" :offset="5">
        <span class="three-inp">筛选</span>
      </el-col>
      <el-col :span="3">
        <span>导出报表</span>
      </el-col>
      <el-col :span="3">
        <a href="#">查看已生成报表</a>
      </el-col>
      <el-col :span="3">
        <a href="#">清空筛选条件</a>
      </el-col>
    </el-row>

    <div>
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Commodity_Group: [
        {
          label: "全部"
        },
        {
          label: "其他"
        },
        {
          label: "列表中隐藏"
        },
        {
          label: "最热商品"
        },
        {
          label: "最新商品"
        }
      ],
      Goods_Category: [
        {
          label: "全部"
        },
        {
          label: "实物商品"
        },
        {
          label: "虚拟商品"
        },
        {
          label: "电子卡卷"
        },
        {
          label: "付费会员卡"
        },
        {
          label: "酒店商品"
        },
        {
          label: "周期购商品"
        },
        {
          label: "分销商品"
        },
        {
          label: "海淘商品"
        }
      ],
      inventory: [
        {
          label: "全部"
        },
        {
          label: "拍下扣减库存"
        },
        {
          label: "付款扣减库存"
        }
      ],
      value: "",
      activeName: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.Main {
  margin: 20px 20px;
  background: rgb(247, 248, 250);
  height: 600px;
  font-size: 14px;
  .main-Nav {
    height: 48px;
    text-align: center;
    line-height: 48px;
  }
  .issue {
    display: inline-block;
    background: rgb(46, 109, 216);
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    width: 90px;
    border-radius: 5px;
    margin: 10px;
  }
  .classify {
    background: rgb(248, 248, 248);
    font-size: 14px;
    .classify-one {
      padding: 20px 0;
      .inp1 {
        height: 35px;
        border: 1px solid #ccc;
        color: #ccc;
        border-radius: 2px;
      }
    }
  }
  .classify-three {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin: 10px 0;
    span {
      border: 1px solid #ccc;
      display: inline-block;
      width: 90px;
      height: 32px;
      line-height: 32px;
      text-align: center;
    }
    .three-inp {
      display: inline-block;
      color: #fff;
      background: rgb(46, 109, 216);
      width: 62px;
      height: 32px;
      line-height: 32px;
      text-align: center;
    }
    a {
      display: inline-block;
      color: rgb(80, 141, 217);
      height: 32px;
    }
  }
}
</style>