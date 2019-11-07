<template>
      <div>         
         <div v-show="show3">
                <el-collapse-transition>
                    <div v-show="show3">
                    <div class="transition-box">

                        <!-- 第一个 -->
          <div style="height:20px;"></div>
          <el-row align="middle" type="flex" style="height:50px;line-height:50px;">
            <el-col :span="3">
                <span class="cliend_span">客户身份:</span>
            </el-col>
            <el-col :span="5" style="height:50px;line-height:50px;"><div class="block">
                <el-select v-model="value" placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">权益卡:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value1" filterable placeholder="全部">
                    <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label"
                    :value="item.value1">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">性别:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value2" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value2">
                    </el-option>
                </el-select>
            </div>
            </el-col>
          </el-row>

            <!-- 第二个 -->
          <div style="height:20px;"></div>
          <el-row align="middle" type="flex" style="height:50px;line-height:50px;">
            <el-col :span="3">
                <span class="cliend_span">来源渠道:</span>
            </el-col>
            <el-col :span="5"><div class="block">
                <el-select v-model="value3" placeholder="请选择">
                    <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label"
                    :value="item.value3">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">来源方式:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value4" placeholder="请选择">
                    <el-option
                    v-for="item in options4"
                    :key="item.value4"
                    :label="item.label"
                    :value="item.value4">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">微信地域:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                  <el-select v-model="value5" multiple placeholder="请选择">
                    <el-option v-for="item in options5" :key="item.value5" :label="item.label" :value="item.value5"></el-option>
                 </el-select>
            </div>
            </el-col>
          </el-row>

          <!-- 第三个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex" style="height:50px;line-height:50px;">
            <el-col :span="3">
                <span class="cliend_span">标签:</span>
            </el-col>
          <el-col :span="6"   style="margin-left:-28px"><div class="block">
                  <el-select v-model="value6" multiple placeholder="全部">
                    <el-option v-for="item in options6" :key="item.value6" :label="item.label" :value="item.value6"></el-option>
                 </el-select>
            </div>
            </el-col>

            <el-col :span="2" style="margin-left:-28px">
               <span class="cliend_span">购买次数:</span> 
            </el-col>            
            <el-col :span="2"  style="margin-left:20px"><div class="block"> 
                <el-input v-model="input" placeholder="次" style="width:88px;"></el-input>
            </div>
            </el-col>
             <el-col :span="0.5">
                <span class="cliend_span1" style="width:20px;height:20px;line-height:20px">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次" style="width:88px;"></el-input>
            </div>
            </el-col>

            <el-col :span="2" style="margin-left:15px">
               <span class="cliend_span">单笔单价:</span> 
            </el-col>            
            <el-col :span="2" style="margin-left:20px"><div class="block">
                <el-input v-model="input" placeholder="元" style="width:88px;"></el-input>
            </div>
            </el-col>
             <el-col :span="0.5">
                <span class="cliend_span1" style="width:20px;height:20px;line-height:20px">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="元" style="width:88px;"></el-input>
            </div>
            </el-col>
          </el-row>

          <!-- 第四个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex" style="height:50px;line-height:50px;">
            <el-col :span="3">
                <span class="cliend_span">积分:</span>
            </el-col>           
            <el-col :span="2"  style="margin-left:20px"><div class="block">
                <el-input v-model="input" placeholder="分" style="width:88px;"></el-input>
            </div>
            </el-col>
             <el-col :span="0.5">
                <span class="cliend_span1" style="width:20px;height:20px;line-height:20px">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="分" style="width:88px;"></el-input>
            </div>
            </el-col>
            <el-col :span="2" style="margin-left:15px">
               <span class="cliend_span">储存余额:</span> 
            </el-col>            
            <el-col :span="2" style="margin-left:20px"><div class="block">
                <el-input v-model="input" placeholder="元" style="width:88px;"></el-input>
            </div>
            </el-col>
             <el-col :span="0.5">
                <span class="cliend_span1" style="width:20px;height:20px;line-height:20px;">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="元" style="width:88px;"></el-input>
            </div>
            </el-col>
            <el-col :span="2" style="margin-left:15px">
               <span class="cliend_span">累计金额:</span> 
            </el-col>            
            <el-col :span="2" style="margin-left:20px"><div class="block">
                <el-input v-model="input" placeholder="元" style="width:88px;"></el-input>
            </div>
            </el-col>
             <el-col :span="0.5"><span class="cliend_span1" style="width:20px;height:20px;line-height:20px;">-</span></el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="元" style="width:88px;"></el-input>
            </div>
            </el-col>
          </el-row>
                    </div>
                    
                    </div>
                </el-collapse-transition>
                </div>


         <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span4"></span>
            </el-col>
            <el-col :span="15">
                <el-button type="primary">筛选</el-button>
                <el-button type="text">重置筛选条件</el-button>
                 <el-button @click="show3 = !show3">收缩框</el-button>
            </el-col>
            
          </el-row>
                
            </div>
</template>

<script>
export default {
    data: () => ({
      show3: true,
      input:"",
    options: [{
            value: '选项1',
            label: '全部'
            }, {
            value: '选项2',
            label: '会员'
            }, {
            value: '选项3',
            label: '非会员'
            }, {
            value: '选项4',
            label: '禁止购买名单'
            }],
     options1: [{
            value1: '选项1',
            label: '全部'
            }],
     options2: [{
            value1: '选项1',
            label:  '全部'
            },
            {
            value1: '选项1',
            label:  '男'
            },
            {
            value1: '选项1',
            label:  '女'
            }],
      options3: [{
            value1: '选项1',
            label:  '全部'
            }],
      options4: [{
            value4: '',
            label:  ''
            }],        
      options5: [{
            value5: '选项1',
            label:  '北京市'
            },
            {
            value5: '选项2',
            label:  '天津市'
            },
            {
            value5: '选项3',
            label:  '河北省'
            },
            {
            value5: '选项4',
            label:  '河南省'
            },
            {
            value5: '选项5',
            label:  '黑龙江省'
            }],   
      options6: [{
            value6: '选项1',
            label:  '无标签用户'
            }],       
            value: '',
            value1:"",
            value2:"",
            value3:"", 
            value4:"", 
            value5:"", 
            value6:"",  
        })
    
}
</script>

<style lang="scss" scoped>
.transition-box {
    color: black;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
//   .box {
//       display: none;
//   }
.cliend_span {
        display: block;
        text-align: end;
        font-size: 15px;
    }
    .cliend_span1 {
        display: block;
        text-align: center;
        font-size: 15px;      
    }
</style>