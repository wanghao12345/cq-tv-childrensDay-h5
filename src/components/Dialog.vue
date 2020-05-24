<template>
  <van-overlay :show="show" @click="handleCloseDialogClick">
    <div class="wrapper" @click.stop>
      <div class="block">
        <div class="content">
          <div class="title" v-if="info.title">{{info.title}}</div>
          <slot></slot>
          <div class="question" v-if="info.question">{{info.question}}</div>
        </div>
        <div class="btn-list">
          <span class="left" @click="handleCloseDialogClick">{{info.cancerTxt}}</span>
          <span class="right" @click="handleQueryDialogClick">{{info.queryTxt}}</span>
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
  import Vue from 'vue';
  import { Overlay } from 'vant';
  import 'vant/lib/overlay/style'

  Vue.use(Overlay);
  export default {
    name: "Dialog",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      info: {
        type: Object,
        default () {

        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      /**
       * 关闭弹窗
       */
      handleCloseDialogClick () {
        this.$emit('handleCloseDialogClick', false)
      },
      /**
       * 确定
       */
      handleQueryDialogClick () {
        this.$emit('handleQueryDialogClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .block {
      width: 15rem;
      min-height: 7rem;
      background-color: #fff;
      border-radius: 0.3rem;
      overflow: hidden;
      box-sizing: border-box;
      padding-bottom: 2.2rem;
      position: relative;
      .content{
        padding: 2rem 1rem;
        .title{
          text-align: center;
          font-size: 0.8rem;
          color: #333333;
          font-weight: bold;
        }
        .question{
          text-align: center;
          font-size: 0.7rem;
          color: #333333;
          font-weight: bold;
        }
      }
      .btn-list{
        @include wh(100%, 2.2rem);
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #CCCCCC;
        box-sizing: border-box;
        border-top: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          display: block;
          height: 100%;
          font-size: 0.7rem;
          @include CC;
          width: 50%;
          color: white;
        }
        span.left{

        }
        span.right{
          background:linear-gradient(90deg,rgba(79,147,255,1) 0%,rgba(58,187,253,1) 100%);
        }
      }
    }
  }

</style>
