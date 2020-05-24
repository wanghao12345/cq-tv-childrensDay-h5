<template>
 <div class="btn-wrapper" :style="btnOuterStyle">
   <van-button
     type="default"
     :style="btnTextStyle"
     @click="handleButtonClick"
   >
     <slot></slot>
   </van-button>
 </div>
</template>

<script>
  import Vue from 'vue';
  import { Button } from 'vant';
  import 'vant/lib/button/style';

  Vue.use(Button);
  export default {
    name: 'Button',
    props: {
      btnOuterStyle: {
        type: Object,
        default () {
          return {}
        }
      },
      btnTextStyle: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      handleButtonClick () {
        this.$emit('handleButtonClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .btn-wrapper{
    @include wh(100%, 2.5rem);
    /deep/button{
      @include wh(100%, 100%);
      background:linear-gradient(90deg,rgba(79,147,255,1) 1%,rgba(58,187,253,1) 100%);
      .van-button__text{
        font-size: 0.9rem;
        color: white;
      }
    }
  }
</style>
