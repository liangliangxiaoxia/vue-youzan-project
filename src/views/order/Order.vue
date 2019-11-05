<template>
    <div class="order">
        <LeftNav></LeftNav>
        <OrderCenter></OrderCenter>
        <OrderRight></OrderRight>
    </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import OrderCenter from './OrderCenter.vue'
import OrderRight from './OrderRight'
export default {
    components:{
        LeftNav,
        OrderCenter,
        OrderRight
    }
}
</script>

<style lang="scss" scoped>
.order{
    padding-left:92px;
}
</style>