<template>
<div>
<div class="Addcustomer">
  <Addcustomer></Addcustomer>
  <div class="Addcustomer_right">粉丝管理</div>
</div>

  <Grid></Grid>
  <hr>
  <Date></Date>
  <Dropdown></Dropdown>
  <Footer></Footer>
</div>
</template>
<script>
import Addcustomer from "./Addcustomer.vue"
import Grid from "./Grid.vue"
import Date from "./Date.vue"
import Dropdown from "./Dropdown.vue"
import Footer from './Footer.vue'

export default {
    components:{
      Addcustomer,
      Grid,
      Date,
      Dropdown,
      Footer
    }
}
</script>
<style lang="scss" scoped>
    .Addcustomer{
        background: rgb(247,248,250);
        height:70px;
        .Addcustomer_right{
            float:right;
            height:70px;
            line-height: 70px;
            font-size: 16px;
        }
    }
</style>
