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
        <el-tab-pane label="销售中" name="first">销售中</el-tab-pane>
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

    <div class="sort">
      <el-row :gutter="20">
        <el-col :span="1" :offset="1">
          <input type="checkbox" name id />
        </el-col>
        <el-col :span="2">
          <span>商品</span>
        </el-col>
        <el-col :span="2">
          <span>价格</span>
          <span class="el-icon-d-caret"></span>
        </el-col>
        <el-col :span="2">
          <span>访问量</span>
        </el-col>
        <el-col :span="2">
          <span>库存</span>
          <span class="el-icon-d-caret"></span>
        </el-col>
        <el-col :span="2">
          <span>总销量</span>
          <span class="el-icon-d-caret"></span>
        </el-col>
        <el-col :span="2">
          <span>创建时间</span>
          <span class="el-icon-d-caret"></span>
        </el-col>
        <el-col :span="2">
          <span>序号</span>
          <span class="el-icon-d-caret"></span>
        </el-col>
        <el-col :span="2" :offset="3">
          <span>操作</span>
        </el-col>
      </el-row>

      <div class="dataArr">
        <div class="no_data">没有更多数据了</div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="paging">
      <el-row :gutter="20">
        <el-col :span="1" :offset="1">
          <input type="checkbox" /> &nbsp;
        </el-col>
        <el-col :span="2">
          <span>当页选项</span>
        </el-col>
        <el-col :span="2">
          <span>改分组</span>
        </el-col>
        <el-col :span="2">
          <span>下架</span>
        </el-col>
        <el-col :span="2">
          <span>删除</span>
        </el-col>
        <el-col :span="2">
          <span>批量设置</span>
        </el-col>
        <el-col :span="11" :offset="1">
          <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.Main {
  margin: 20px 20px;
  background: rgb(247, 248, 250);
  height: 100%;
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
  .sort {
    // height: 56px;
    text-align: center;
    line-height: 56px;
    .no_data {
      height: 56px;
      background: #fff;
    }
  }
  .paging {
    height: 80px;
    padding-top: 20px;
    text-align: center;
    span {
      height: 32px;
      line-height: 32px;
      border: 1px solid #ccc;
      width: 80px;
      display: inline-block;
      text-align: center;
    }
    input {
      margin-top: 10px;
    }
  }
}
</style>