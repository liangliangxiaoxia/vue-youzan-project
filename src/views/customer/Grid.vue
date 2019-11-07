<template>
<div class="grid">
   <el-row :gutter="20">
      <el-col :span="3">
          <div class="grid-content bg-purple">
              <div>全部客户</div>
              <div>0位</div>
          </div>
    </el-col>
      <el-col :span="3">
          <div class="grid-content bg-purple">
              <div>新增客户<el-tooltip content="最近30天新增并且没有任何交易记录的客户" placement="top">
               <i class="el-icon-question"></i>
             </el-tooltip>
              </div>
              <div>0位</div>
          </div>
       </el-col>
      <el-col :span="3">
          <div class="grid-content bg-purple">
              <div>兴趣人群<el-tooltip content="近七天有加购行为,但没有成功付款的客户" placement="top">
               <i class="el-icon-question"></i>
             </el-tooltip></div>
              <div>0位</div>
          </div>
      </el-col>
      <el-col :span="3">
          <div class="grid-content bg-purple">
              <div>微信互动粉丝<el-tooltip content="48小时内有在公众号内发生过互动行为的粉丝" placement="top">
               <i class="el-icon-question"></i>
             </el-tooltip></div>
              <div>0位</div>
          </div>
      </el-col>
   </el-row> 
      
</div>    
</template>
<script>

export default {
    data:function(){
        return{
         
        }
    }
}
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
    margin-left:20px;
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
    >div{
        height:30px;
        line-height: 30px;
        width:164px;
        background: rgb(247,248,250);
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>