<template>
    <div class="real_from">
        <el-row :gutter="20" v-if="item.type==0">
          <el-col :span="12" v-for="(ele1,idx1) in item.left" :key="idx1">
            <div class="grid-content bg-purple box">
              <p v-text="ele1.a">支付订单数</p>
              <p>
                <span v-text="ele1.b">0</span>
              </p>
              <p>
                <span v-text="ele1.c">昨日：</span>
                <span v-text="ele1.d">0</span>
              </p>
            </div>
        </el-col>
        
        </el-row>
        
        <el-row :gutter="20" v-else>
          <el-col :span="12" v-for="(ele2,idx2) in item.right" :key="idx2">
            <div class="grid-content bg-purple box2">
              <p v-text="ele2.a">支付订单数</p>
              <p>
                <span v-text="ele2.b">0</span>
              </p>
            </div>
           </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    props:['item'],
    data(){
        return {
            msg:null,
        }
    },
    computed:{
        
    },
    mounted(){
       
    }
}
</script>

<style lang="scss" scoped>
.real_from{
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
        margin-bottom:30px;
        .box{
            height:85px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            p:nth-child(1){
                color:#969799;
                font-size:14px;
            }
            p:nth-child(2){
                span{
                    font-size:24px;
                    font-weight:bold;
                }
            }
             p:nth-child(3){
                span{
                    font-size:14px;
                    color:#666;
                }
            }
        }
        .box2{
            height:85px;
            p:nth-child(1){
                margin-bottom:16px;
                color:#969799;
                font-size:14px;
            }
            p:nth-child(2){
                span{
                    font-size:24px;
                    font-weight:bold;
                }
            }
        }
      }
    //   .bg-purple-dark {
    //     background: #99a9bf;
    //   }
    //   .bg-purple {
    //     background: #d3dce6;
    //   }
    //   .bg-purple-light {
    //     background: #e5e9f2;
    //   }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
}
</style>