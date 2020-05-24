<template>
  <div class="footer-wrapper">
    <div
      class="menu-item"
      :class="currentMenu === '首页' ? 'active': ''"
      @click="handleMenuClick('/')"
    >
      <i class="iconfont iconyemian-copy-copy"></i>
      <h4>首页</h4>
    </div>
    <div
      class="menu-item"
      :class="currentMenu === '审批' ? 'active': ''"
      @click="handleMenuClick('/approval')"
    >
      <i class="iconfont iconshenpi"></i>
      <h4>审批</h4>
    </div>
    <div
      class="menu-item"
      :class="currentMenu === '消息' ? 'active': ''"
      @click="handleMenuClick('/news')"
    >
      <i class="iconfont iconxiaoxi-"></i>
      <h4>消息</h4>
    </div>
    <div
      class="menu-item"
      :class="currentMenu === '个人中心' ? 'active': ''"
      @click="handleMenuClick('/my')"
    >
      <i class="iconfont iconwodedangxuan"></i>
      <h4>我的</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        currentMenu: '首页'
      }
    },

    watch:{
      $route(to){
        const title = to.meta.title || '首页'
        this.currentMenu = title
      }
    },
    mounted () {
      const title = this.$route.meta.title || '首页'
      this.currentMenu = title
    },
    methods: {
      /**
       * 菜单
       */
      handleMenuClick (val) {
        this.$router.push(val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .footer-wrapper{
    @include wh(100%, 100%);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-top: 1px solid #e4e4e4;
    .menu-item{
      @include wh(25%, 100%);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.3rem 0;
      i{
        font-size: 1.1rem;
        color: #999999;
        display: block;
      }
      h4{
        width: 100%;
        font-size: 0.8rem;
        color: #999999;
        text-align: center;
      }
      &.active{
        background:linear-gradient(90deg,rgba(79,147,255,1) 0%,rgba(58,187,253,1) 100%);
        h4{
          color: white;
        }
        i{
          color: white;
        }
      }
    }
  }
</style>
