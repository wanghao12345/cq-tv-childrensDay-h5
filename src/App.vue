<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <div style="width: 100%;height: 100%">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {

    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  @import './style/common';
  @import './style/mixin';
  #app{
    @include wh(100%, 100%);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
