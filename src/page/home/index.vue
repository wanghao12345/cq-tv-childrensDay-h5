<template>
  <div class="home-wrapper">
    <div class="swiper-container" v-show="page === 1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <PageOne :currentPage="currentPage" />
        </div>
        <div class="swiper-slide">
          <PageTwo :currentPage="currentPage" />
        </div>
        <div class="swiper-slide">
          <PageThree :currentPage="currentPage" />
        </div>
        <div class="swiper-slide">
          <PageFour :currentPage="currentPage" />
        </div>
        <div class="swiper-slide">
          <PageFive :currentPage="currentPage" @handleChangePage="handleChangePage1" />
        </div>
      </div>
    </div>
    <div class="page-box" v-if="page === 2">
      <Upload
        @handleChangePage="handleChangePage2"
        @handleReload="handleReload"
        @handleChangeOnePage="page = 1"
      />
    </div>
    <div class="page-box" v-show="page === 3">
      <Complete @handleChangePage="handleChangePage3" />
    </div>
    <audio controls="controls" autoplay preload loop class="audio" id="bgmusic">
      <source :src="music" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>
    <div class="swith-btn">
      <img :src="micOn" class="mic-open" @click="handleCloseMic" v-show="micStatus" alt="">
      <img :src="micOff" @click="handleOpenMic" v-show="!micStatus" alt="">
    </div>
    <div class="tip-btn" v-if="tipShow" @click="tipShow = false">
      <img :src="tipIcon" alt="tipIcon">
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import PageOne from "./components/PageOne";
  import PageTwo from "./components/PageTwo";
  import PageThree from "./components/PageThree";
  import PageFour from "./components/PageFour";
  import PageFive from "./components/PageFive";

  import Upload from '../upload'
  import Complete from '../complete'

  import micOn from '@/assets/img/common/btn_music_off.png'
  import micOff from '@/assets/img/common/btn_music_on.png'

  import music from '@/assets/img/common/Dunn.mp3'
  import tipIcon from '@/assets/img/common/btn_sspct.png'


  import Swiper from 'swiper'
  const wx = require('weixin-js-sdk')

  export default {
    name: "Home",
    components: {
      PageOne,
      PageTwo,
      PageThree,
      PageFour,
      PageFive,
      Upload,
      Complete
    },
    data () {
      return {
        currentPage: 0,
        page: 1,
        music,
        micOn,
        micOff,
        tipIcon,
        micStatus: true,
        tipShow: true
      }
    },
    computed: {

    },
    mounted () {
      const _this = this
      new Swiper('.swiper-container', {
        direction : 'vertical',
        on: {
          slideChangeTransitionStart: function(){
            console.log('check:' + this.activeIndex);
            _this.currentPage = this.activeIndex * 1
          }
        }
      })
      this.share()
      this.play()

      this.handleOpenMic()
    },
    methods: {
      handleReload () {
        console.log('21');
        this.page = 1
      },
      handleCloseMic () {
        const myAuto = document.getElementById('bgmusic');
        myAuto.pause();
        this.micStatus = false
      },
      handleOpenMic () {
        const myAuto = document.getElementById('bgmusic');
        myAuto.loop = true;
        myAuto.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          myAuto.play();
        }, false);
        this.micStatus = true
      },
      handleChangePage1 () {
        this.page = 2
      },
      handleChangePage2 (val) {
        this.page = 3
      },
      handleChangePage3 () {
        this.page = 2
      },
      share () {

        const u = navigator.userAgent;
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        let link = window.location.href

        if (isiOS) {


        } else {

        }

        console.log('link:', link);

        const wxShare = 'https://weixin.phoenix-resonance.com/hd/pages/201804video/dist/img/60bf93e1b9db0932249724900c9f3d7.png'
        this.loading = true
        axios.get('https://weixin.phoenix-resonance.com/hd/H20191111kj/getWeiXinJsApiServer.do?url=' + encodeURIComponent(link)).then(res => {
          // alert(JSON.stringify(res))
          const data = res.data
          console.log(data);
          wx.config({
            debug: false,////生产环境需要关闭debug模式
            appId: data.appid,//appId通过微信服务号后台查看
            timestamp: data.time,//生成签名的时间戳
            nonceStr: data.nonceStr,//生成签名的随机字符串
            signature: data.signature,//签名
            jsApiList: [//需要调用的JS接口列表
              'onMenuShareTimeline',//分享给好友
              'onMenuShareAppMessage'//分享到朋友圈
            ]
          });

          const shareLink = 'https://weixin.phoenix-resonance.com/hd/pages/201804video/dist/index.html'
          // const shareLink = location.href

          wx.ready(() => {
            //分享朋友圈
            wx.onMenuShareTimeline({
              title: '随手拍春天：上电视头条！赢GoPro！',
              link: shareLink,
              imgUrl: wxShare,// 自定义图标
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回.
                // alert('click shared');
              },
              success: function (res) {
                // alert('shared success');
                //some thing you should do
              },
              cancel: function (res) {
                // alert('shared cancle');
              },
              fail: function (res) {
                // alert(JSON.stringify(res));
              }
            });
            //分享给好友
            wx.onMenuShareAppMessage({
              title: '随手拍春天：上电视头条！赢GoPro！', // 分享标题
              desc: '重庆有线视频头条有奖征集春游段视频！', // 分享描述
              link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: wxShare, // 自定义图标
              type: 'link', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: function () {
                // 用户确认分享后执行的回调函数
                // alert('shared success');
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
                // alert('shared cancle');
              },
              fail: function (res) {
                // alert(JSON.stringify(res));
              }
            });
            wx.error(function (res) {
              // alert(JSON.stringify(res));
            });
          })

        }).finally(() => {
          this.loading = false
        }).catch(() => {
          // alert('请求分享参数出错')
        })
      },
      play () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin";
  @import "~swiper/css/swiper.css";
  @import "../../assets/css/font.css";
  .home-wrapper{
    @include wh(100%, 100%);
    .audio{
      position: fixed;
      top: 0;
      right: 0;
      opacity: 0;
    }
    .swith-btn{
      position: fixed;
      top: 1.6rem;
      right: 1rem;
      z-index: 9999;
      img{
        width: 2rem;
      }
    }
    .swiper-container{
      @include wh(100%, 100%);
    }
    .page-box{
      @include wh(100%, 100%);
    }
    .tip-btn{
      position: fixed;
      bottom: 0rem;
      right: 0.5rem;
      z-index: 9999;
      img{
        width: 3.5rem;
      }
    }
  }
  .mic-open{
    animation: rotate 3s linear infinite;
  }
  @keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
  }
</style>
