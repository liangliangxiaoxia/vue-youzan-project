<template>
  <div class="goods">
    <Header></Header>
    <Main></Main>
    <LeftNav></LeftNav>
    <Fooder></Fooder>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Header from './header.vue'
import Main from './main.vue'
import Fooder from './fooder'
export default {
  components: {
    LeftNav,
    Header,
    Main,
    Fooder,
  }
};
</script>

<style lang="scss" scoped>
html,body{
    padding: 0;
    margin: 0;
}
.goods {
  padding-left: 92px;
  background: #fff;
}
</style>