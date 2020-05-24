<template>
  <div class="no-data-wrapper">
    <div class="img-box">
      <img :src="data[type].icon" alt="icon">
      <p>{{data[type].text}}</p>
    </div>
  </div>
</template>

<script>
  import AlarmEvent from '@/assets/img/nodata/alarmEvent.png'
  import DeviceList from '@/assets/img/nodata/deviceList.png'
  import FollowList from '@/assets/img/nodata/followList.png'
  import RepairList from '@/assets/img/nodata/repairList.png'
  export default {
    name: "NoData",
    props: {
      type: {
        type: String,
        default: 'AlarmEvent'
      }
    },
    data () {
      return {
        data: {
          AlarmEvent: {
            icon: AlarmEvent,
            text: '当前没有告警信息哦~'
          },
          DeviceList: {
            icon: DeviceList,
            text: '当前没有设备呢~'
          },
          FollowList: {
            icon: FollowList,
            text: '亲，您还没有关注呢~'
          },
          RepairList: {
            icon: RepairList,
            text: '当前没有维修工单哦~'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/mixin";
  .no-data-wrapper{
    @include wh(100%, 100%);
    background-color: white;
    .img-box{
      width: 80%;
      margin: 5rem auto;
      position: relative;
      img{
        width: 100%;
      }
      p{
        position: absolute;
        top: 6rem;
        width: 100%;
        text-align: center;
        font-size: 0.7rem;
        color: #999999;
      }
    }
  }
</style>
