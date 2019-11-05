<template>
    <div class="goods">
         商品
        <LeftNav></LeftNav>
    </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
export default {
    components:{
        LeftNav
    }
}
</script>

<style lang="scss" scoped>
.goods{
    padding-left:92px;
}
</style>