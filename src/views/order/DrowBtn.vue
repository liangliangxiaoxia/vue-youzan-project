<template>
  <div>
    <!-- 1 -->
    <el-row type="flex" class="row-bg" align="middle" >
  <el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">订单搜索:</span> <el-select v-model="value" placeholder="请选择"  style="width:184px;height:32px;margin-left:10px;padding-right:10px;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple"><el-input v-model="input"></el-input></div></el-col>
</el-row>

<!-- 2 -->
 <el-row type="flex" class="row-bg" >
  <el-col :span="5.5" ><div class="grid-content bg-purple-light"><div class="block"><span class="font_size_chage">下单时间:</span>
    <el-date-picker style="width:201px;height:32px;margin-left:10px;padding-right:10px"
      v-model="value1"
      type="datetime"
      placeholder="开始日期">
    </el-date-picker>
  </div></div></el-col>

  <el-col :span="1"  ><div class="grid-content bg-purple" align="middle" ><span style="line-height:40px;text-align:center;" class="font_size_chage">至</span> </div></el-col>

  <el-col :span="5"><div class="grid-content bg-purple"><div class="block">
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="结束日期"
      default-time="12:00:00">
    </el-date-picker>
  </div></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple time_select" style="line-height:30px;text-align:center;" > <span>今</span> <span>昨</span><span>近7天</span><span>近30天</span></div></el-col>

</el-row>


<!-- 3 -->
<el-row type="flex" class="row-bg" >
<el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">商品名称:</span> <el-input style="width:184px;height:32px;margin-left:10px;padding-right:10px" v-model="input" placeholder="请输入"></el-input></div></el-col>
<el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">订单类型:</span> <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
 <el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">维权状态:</span> <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
</el-row>


<!-- 4 -->
<el-row type="flex" class="row-bg" >
<el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">订单状态:</span> <el-select v-model="value" placeholder="请选择" style="width:184px;height:32px;margin-left:10px;padding-right:10px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
 <el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">配送方式:</span> <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
     <el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">付款方式:</span> <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
</el-row>

<!-- 5 -->
<el-row type="flex" class="row-bg" >
<el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">订单来源:</span> <el-select v-model="value" placeholder="请选择" style="width:184px;height:32px;margin-left:10px;padding-right:10px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>
 <el-col :span="6" ><div class="grid-content bg-purple-light"><span class="font_size_chage">是否加星:</span> <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div></el-col>

</el-row>



<!-- 6 -->
<el-row type="flex" class="row-bg" :gutter="70" >
   <el-col :span="1" :offset="1" justify="center"><div class="grid-content bg-purple-light"> <el-button type="primary" size="small ">筛选</el-button></div></el-col>
  <el-col :span="1" ><div class="grid-content bg-purple-light"><el-button plain size="small "> 导出</el-button></div></el-col>
    <el-col :span="5" ><div class="grid-content bg-purple-light"><span style="line-height:30px;text-align:center">查看已导出列表重置筛选条件</span></div></el-col>
</el-row>




  </div>
  
</template>

<script>
export default {
  data: function() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      //时间
       pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
         input: ''
      
    };
  }
};
</script>

<style scoped lang="scss">
.font_size_chage{
  font-size: 14px;
  color: rgb(50, 50, 51)
}
 .el-row {
    // margin-bottom: 20px;
   
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    
    background: #99a9bf;
    //  background: red;
  }
  .bg-purple {
    // background: #d3dce6;
    //  background: red;
     background: rgb(249, 250, 252)
     
  }
  .bg-purple-light {
    // background: #e5e9f2;
     background: rgb(249, 250, 252)
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .time_select{
    span{
      padding: 5px;
      font-size: 14px;
      margin-right: 5px;
      color: #dcdee0;
      border: 1px solid  #dcdee0;
      cursor: pointer;
    }
    span:hover{
      color: #155bd4;
      border:#155bd4 solid 1px;
    }
  }

</style>