<template>
    <div class="service">
         <div>客户经营</div>
         <div>客户管理</div>
         <div>客户查询</div>
         <div>客户分群</div>
         <div>客户导入</div>
         <div>标签管理</div>
         <div>客户运营</div>
         <div>人群运营</div>      
         <div>场景营销</div>
         <div>忠诚度管理</div>
         <div>等级管理</div>
         <div>任务管理</div>
         <div>权益管理</div>
         <div>权益卡</div>
         <div>权益分配</div>
         <div>积分管理</div>
         <div>储值管理</div>
         <div>储值规则</div>
         <div>运营管理</div>
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
.service{
    background: rgb(255,255,255);
    position: fixed;
    bottom: 0;
    left: 92px;
    top:0;
    width:120px;  
    overflow: scroll;
   div{
       width:100px;
       height:56px;
       background: #fff;
       line-height: 56px;
       text-align: center;
   } 
}
</style>