<template>
  <div class="list-item-wrapper">
    <div
      :class="`item-wrapper ${borderBottom ? 'border-line' : ''}`"
      @click="handleListItemClick"
    >
      <div class="left">
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <div class="title">{{title}}</div>
      </div>
      <div class="right">
        <slot name="value"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      title: {
        type: String,
        default: ''
      },
      borderBottom: {
        type: Boolean,
        default: true
      },
      itemStyle: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      /**
       * 点击事件
       */
      handleListItemClick () {
        this.$emit("handleListItemClick")
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .list-item-wrapper{
    @include wh(100%, 3rem);
    box-sizing: border-box;
    padding-left: 1rem;
    .item-wrapper{
      @include wh(100%, 100%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      &.border-line{
        box-sizing: border-box;
        border-bottom: 1px solid #F1F1F1;
      }
      .left{
        width: 6rem;
        display: flex;
        align-items: center;
        .icon{
          margin-right: 0.5rem;
        }
        .title{
          font-size: 0.9rem;
          color: black;
        }
      }
      .right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        padding-right: 0.5rem;
      }
    }
  }

</style>
