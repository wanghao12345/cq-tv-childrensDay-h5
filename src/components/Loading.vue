<template>
  <div class="loading-wrapper">
    <van-loading color="#1989fa" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Loading } from 'vant';
  import 'vant/lib/loading/style'

  Vue.use(Loading);
  export default {
    name: "Loading"
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .loading-wrapper{
    @include wh(100%, 100%);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
