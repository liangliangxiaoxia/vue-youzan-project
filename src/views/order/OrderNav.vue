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

    <div class="order_list">
      <div class="order_list_center">
        <el-table :data="ordersArr2" style="width: 100%" height="350px">
          <el-table-column prop="name" label="商品" width="150"></el-table-column>
          <el-table-column align="right" prop="price" label="单价(元) / 数量" width="350"></el-table-column>
          <el-table-column align="center" prop="afterSales" label="售后" width="120"></el-table-column>
          <el-table-column align="center" prop="customer" label="买家 / 收货人" width="120"></el-table-column>
          <el-table-column align="center" prop="Indistribution" label="配送方式" width="120"></el-table-column>
          <el-table-column align="center" prop="inventory" label="实收金额(元)" width="120"></el-table-column>
          <el-table-column align="right" prop="orderState" label="订单状态" width="120"></el-table-column>
          <el-table-column align="right" fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="order_pages">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="(ordersArr2.length)+1"
        ></el-pagination>
      </div>
    </div>

    <!-- https://img.yzcdn.cn/v2/image/www/footer/logov2.png -->
    <div class="order_bottom_logo"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "第一页"
        },
        {
          value: "选项2",
          label: "第二页"
        },
        {
          value: "选项3",
          label: "第三页"
        },
        {
          value: "选项4",
          label: "第四页"
        },
        {
          value: "选项5",
          label: "第五页"
        }
      ],
      value: "",
      activeName: "first",
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
      type: ""
    };
  },
  mounted() {
    this.updataOrderArrList({ lits: this.ordersArr });
  },
  computed: {
    ...mapState(["ordersArr2", "ordersArr"])
  },
  methods: {
    handleClick(tab) {
      this.type = tab.name;
      console.log(tab.name);
      this.updatascreeOrder({ type: this.type });
    },
    // 删除
    deleteRow(index, rows) {
      this.$confirm(`确定删除吗?`, "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      }).then(() => {
        rows = this.tableData = this.ordersArr2;
        rows.splice(index, 1);
      });
    },
    // 每页多少条
    handleSizeChange(val) {
      let page = val;
      console.log(`每页 ${val} 条`);
      this.updataOrderArr({ page: page });
    },
    // 页码
    handleCurrentChange(val) {
      let page = val;
      this.updatapagechage({ page: page });
      console.log(`当前页: ${val}`);
    },
    ...mapMutations([
      "updataOrderArr",
      "updatapagechage",
      "updatascreeOrder",
      "updataOrderArrList"
    ])
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

  .order_bottom_logo {
    height: 40px;
    background: url("https://img.yzcdn.cn/v2/image/www/footer/logov2.png")
      no-repeat center center;
  }

  .order_list {
    margin-top: 20px;
    width: 1264px;
    height: 212px;
    margin-bottom: 200px;
    //   border: 1px solid #000;
    .order_list_center {
      width: 100%;
      height: 212.8px;
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
      .order_pages_inpt {
        input {
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
      > div {
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