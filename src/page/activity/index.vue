<template>
    <div class="activity-wrapper">
        <div class="steg-wrapper" v-show="stegStatus === 'STEG_ONE'">
            <van-swipe
                style="height: 100%;"
                vertical
                :loop="false"
            >
                <van-swipe-item>
                    <PageZero></PageZero>
                </van-swipe-item>
                <van-swipe-item>
                    <PageOne></PageOne>
                </van-swipe-item>
                <van-swipe-item>
                    <PageTwo></PageTwo>
                </van-swipe-item>
                <van-swipe-item>
                    <PageThree></PageThree>
                </van-swipe-item>
                <van-swipe-item>
                    <PageFour @handleChangeSteg="handleChangeSteg"></PageFour>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="steg-wrapper" v-show="stegStatus === 'STEG_TWO'">
            <PageFive @handleChangeSteg="handleChangeSteg"></PageFive>
        </div>
        <div class="steg-wrapper" v-show="stegStatus === 'STEG_THREE'">
            <PageSix @handleChangeSteg="handleChangeSteg"></PageSix>
        </div>
        <audio controls="controls" autoplay preload loop class="audio" id="backMusic">
            <source :src="music" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
        <div class="swith-btn">
            <img :src="micOn" class="mic-open" @click="handleCloseMic" v-show="micStatus" alt="">
            <img :src="micOff" @click="handleOpenMic" v-show="!micStatus" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue';
    import {Swipe, SwipeItem} from 'vant';
    import PageZero from './components/PageZero'
    import PageOne from './components/PageOne'
    import PageTwo from './components/PageTwo'
    import PageThree from './components/PageThree'
    import PageFour from './components/PageFour'
    import PageFive from './components/PageFive'
    import PageSix from './components/PageSix'

    import micOn from '@/assets/img/common/btn_music_off.png'
    import micOff from '@/assets/img/common/btn_music_on.png'

    import music from '@/assets/img/common/music.mp3'

    const wx = require('weixin-js-sdk')

    Vue.use(Swipe);
    Vue.use(SwipeItem);
    export default {
        name: "Activity",
        components: {
            PageZero,
            PageOne,
            PageTwo,
            PageThree,
            PageFour,
            PageFive,
            PageSix
        },
        data() {
            return {
                micOn,
                micOff,
                music,
                stegStatus: 'STEG_ONE',
                micStatus: true
            }
        },
        mounted() {
            this.share()
            this.initMic()
            this.handleOpenMic()
        },
        methods: {
            /**
             * 关闭音乐
             */
            handleCloseMic () {
                const myAuto = document.getElementById('backMusic');
                myAuto.pause();
                this.micStatus = false
            },
            /**
             * 打开音乐
             */
            handleOpenMic () {
                const myAuto = document.getElementById('backMusic');
                myAuto.loop = true;
                myAuto.play();
                document.addEventListener("WeixinJSBridgeReady", function () {
                    myAuto.play();
                }, false);
                this.micStatus = true
            },
            /**
             * 初始化音乐
             */
            initMic () {
                //--创建页面监听，页面加载完毕--触发音频播放
                document.addEventListener('DOMContentLoaded', function () {
                    function audioAutoPlay() {
                        var musicEle0 = document.getElementById('backMusic');
                        musicEle0.play();
                    }
                    audioAutoPlay();
                });
                //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
                document.addEventListener('touchstart', function () {
                    function audioAutoPlay() {
                        var musicEle0 = document.getElementById('backMusic');
                            musicEle0.play();
                    }
                    audioAutoPlay();
                });
            },
            /**
             * 改变页面显示
             */
            handleChangeSteg(val) {
                this.stegStatus = val
            },
            /**
             * 分享
             */
            share() {
                let link = window.location.href
                console.log('link:', link);

                const wxShare = 'https://weixin.phoenix-resonance.com/hd/pages/201805video/dist/ba.jpg'
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

                    const shareLink = 'https://weixin.phoenix-resonance.com/hd/pages/201805video/dist/index.html'
                    // const shareLink = location.href

                    wx.ready(() => {
                        //分享朋友圈
                        wx.onMenuShareTimeline({
                            title: '大小儿童过六一｜寻找童年的“耍事”',
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
                            title: '大小儿童过六一｜寻找童年的“耍事”', // 分享标题
                            desc: '小时候的游园“耍事”，是我们回到，童年的时光机', // 分享描述
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
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/happyFont.css";

    .activity-wrapper {
        width: 100%;
        height: 100%;
        .steg-wrapper {
            width: 100%;
            height: 100%;
        }
        .audio{
            position: fixed;
            top: 0;
            right: 0;
            opacity: 0;
            }
        .swith-btn{
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 9999;
            img{
                width: 2rem;
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
