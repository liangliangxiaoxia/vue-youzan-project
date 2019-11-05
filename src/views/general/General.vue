<template>
    <div class="general">
        概况
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
.general{
    padding-left:92px;
}
</style>