<template>
<div class="footer">
<el-row :gutter="20">
  <el-col :span="4" style="border:1px solid rgb(193,193,193);">
      <div class="grid-content bg-purple">
        <div style="height:40px;line-height:40px;">客户</div>
      </div>
  </el-col>

  <el-col :span="15" style="border:1px solid rgb(193,193,193);">
      <div class="grid-content bg-purple">
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%">权益卡</div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%">积分</div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%">储值余额</div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%">购买次数</div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%">累计消费金额</div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%">上次消费时间</div>
       </div>
   </el-col>
  <el-col :span="5" style="border:1px solid rgb(193,193,193);">
      <div class="grid-content bg-purple">
        <div class="bar" style="height:40px;line-height:40px;">操作</div>
      </div>
      </el-col>  
</el-row>

<div v-if="newGoodArr.length>=0">
<el-row :gutter="20" v-for="(item,index) in newGoodArr[page-1]" :key="index">
  <el-col :span="4" style="border:1px solid rgb(193,193,193);">
      <div class="grid-content bg-purple">
        <div style="height:40px;line-height:40px;" v-text="item.name"></div>
      </div>
  </el-col>

  <el-col :span="15" style="border:1px solid rgb(193,193,193);">
      <div class="grid-content bg-purple">
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%"></div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%" v-text="item.integral"></div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%" v-text="item.balance"></div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%" v-text="item.buy"></div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%" v-text="item.grand"></div>
           <div class="bar" style="float:left;height:40px;line-height:40px;width:15%" v-text="item.date"></div>
       </div>
   </el-col>
  <el-col :span="5" style="border:1px solid rgb(193,193,193);">
      <div class="grid-content bg-purple">
        <div class="bar" style="height:40px;line-height:40px;"><span>设置权益卡</span> <span>加标签</span> 
                <el-button size="mini" type="danger" @click="remove(index,item)">删除</el-button>
        </div>
      </div>
  </el-col>  
</el-row>
</div>
       <div style="height:40px;"></div>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage4" :page-sizes="[5]" :page-size="1" layout="total, sizes, prev, pager, next, jumper"
         :total="12"></el-pagination>

</div>   
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  //   props:["item"],
  data() {
    return {
      checked: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      page: 1,
      
    };
  },
  computed: {
    ...mapState(["newGoodArr", "num", "newGoodArr2"])
  },
  mounted() {
    this.getUser();
    // this.updateNewGoodArr()
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    ...mapActions(["getUser"]),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(this.page);
      this.page = val;
    },
    ...mapMutations(["updateNewGoodArr"]),
    // 删除
    remove(index) {
      this.$confirm(`确定删除吗?`, "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      }).then(() => {
         this.newGoodArr[0].splice(index,1);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  // background: #99a9bf;
}
.bg-purple {
  // background: #d3dce6;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  // background-color: #f9fafc;
}
</style>