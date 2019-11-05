<template>
<div class="Addcustomer">
        <el-row>
      <el-button type="primary" @click="dialogFormVisible = true">添加客户</el-button>
        </el-row>
      <el-dialog title="添加客户" :visible.sync="dialogFormVisible">
         <el-divider></el-divider>
           <el-radio v-model="radio" label="1">非会员</el-radio>
           <el-radio v-model="radio" label="2">会员</el-radio>
                <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogFormVisible = false">取 消</el-button>
                   <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
      </el-dialog>
    </div>

</template>
<script>
  export default {
 data() {
      return {
         radio: '1',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
<style lang="scss" scoped>
.Addcustomer{
    height: 70px;
    width:200px;
    overflow: hidden;
    box-sizing: border-box;
    line-height: 70px;
    float: left;
    margin-left:-40px;
}

</style>
