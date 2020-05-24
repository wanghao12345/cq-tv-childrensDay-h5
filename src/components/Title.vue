<template>
  <div class="title-wrapper">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .title-wrapper{
    @include wh(100%, 2rem);
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #333333;
    box-sizing: border-box;
    padding-left: 0.6rem;
    position: relative;
    &::before{
      position: absolute;
      width: 0.2rem;
      height: 1rem;
      background-color: #4A8CFF;
      content: '';
      display: block;
      left: 0;
      top: 0.5rem;
    }
  }
</style>
