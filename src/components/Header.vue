<template>
  <div class="header-wrapper">
    <div class="header-left" @click="handleBackClick">
      <i class="iconfont iconclose"></i>
    </div>
    <div class="header-middle">{{title}}</div>
    <div class="header-right"></div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
        title: '登录'
      }
    },
    watch:{
      $route(to){
        this.title = to.meta.title || '嘉泰工业管家'
      }
    },
    methods: {
      /**
       * 返回上一页
       */
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .header-wrapper{
    @include wh(100%, 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 1rem;
    border-bottom: 0.4px solid #e4e4e4;
    .header-left{
      i{
        font-size: 0.8rem;
        font-weight: bold;
      }
    }
    .header-middle{
      font-size: 1rem;
      font-weight:500;
      color: #333333;
    }
    .header-right{
      width: 1rem;
    }
  }

</style>
