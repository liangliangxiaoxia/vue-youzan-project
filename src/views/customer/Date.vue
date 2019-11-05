<template>
<div>
<el-row :gutter="20" style="padding-left:50px;">
  <el-col :span="6">
          <div class="grid-content bg-purple">
               <div class="block">
                  <span class="demonstration">上次消费时间: </span>
                  <el-date-picker v-model="value1" type="date" placeholder="开始日期"></el-date-picker>
               </div>
          </div>
   </el-col>
   <el-col :span="1"><div class="grid-content bg-purple" style="height:50px;line-height:50px;">至</div></el-col>
  <el-col :span="6">
      <div class="grid-content bg-purple">
               <div class="block">
                  <el-date-picker v-model="value1" type="date" placeholder="结束日期"></el-date-picker>
               </div>
      </div>
  </el-col>
</el-row>

<el-row :gutter="20" style="padding-left:50px;">
  <el-col :span="6">
          <div class="grid-content bg-purple">
               <div class="block">
                  <span class="demonstration">成为客户时间: </span>
                  <el-date-picker v-model="value1" type="date" placeholder="开始日期"></el-date-picker>
               </div>
          </div>
   </el-col>
   <el-col :span="1"><div class="grid-content bg-purple" style="height:50px;line-height:50px;">至</div></el-col>
  <el-col :span="6">
      <div class="grid-content bg-purple">
               <div class="block">
                  <el-date-picker v-model="value1" type="date" placeholder="结束日期"></el-date-picker>
               </div>
      </div>
  </el-col>
</el-row>

<el-row :gutter="20" style="padding-left:50px;">
  <el-col :span="6">
          <div class="grid-content bg-purple">
               <div class="block">
                  <span class="demonstration">成为会员时间: </span>
                  <el-date-picker v-model="value1" type="date" placeholder="开始日期"></el-date-picker>
               </div>
          </div>
   </el-col>
   <el-col :span="1"><div class="grid-content bg-purple" style="height:50px;line-height:50px;">至</div></el-col>
  <el-col :span="6">
      <div class="grid-content bg-purple">
               <div class="block">
                  <el-date-picker v-model="value1" type="date" placeholder="结束日期"></el-date-picker>
               </div>
      </div>
  </el-col>
</el-row>

<el-row :gutter="20" style="padding-left:50px;">
  <el-col :span="6">
      <div class="grid-content bg-purple">
        
  <el-row class="demo-autocomplete">
        <el-col :span="20" style="height:50px;line-height:50px;margin-left:42px;">
      <div class="sub-title" style=" float:left;">关键字:</div>
         <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="手机号/微信昵称/姓名"
      @select="handleSelect" style="width:215px;"></el-autocomplete>
       </el-col>
   </el-row>
      </div>
 </el-col>
</el-row>


</div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      state1: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [{ value: "游戏/商品/小店ID" }, { value: "硬盘" }];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
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
  .block {
    height: 50px;
    line-height: 50px;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
