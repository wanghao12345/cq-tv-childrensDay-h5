<template>
    <Layout>
        <div class="page-wrapper" v-if="currentPage === 4">
            <div class="main-content-box">
                <div class="item-box">
                    <h3>参与规则：</h3>
                    <p>拍一个短视频，讲述你的童年回忆；拍摄与小朋友的游戏现场；模仿首页视频拍摄游园活动。</p>
                </div>
                <div class="item-box">
                    <h3>参与方式：</h3>
                    <p>点击“去投稿”，然后将您的短视频上传至来点APP来友圈</p>
                </div>
                <div class="item-box">
                    <h3>活动时间：</h3>
                    <p>2020年5月29日-2020年6月5日</p>
                </div>
                <div class="item-box">
                    <h3>视频要求：</h3>
                    <p>时间5分钟以内，大小50M以内，格式为MP4或MOV</p>
                    <p class="min">若视频大小超过50M，请投递至邮箱cenzonger@163.com</p>
                </div>
                <div class="btn-box" @click="handleChangeSteg">
                    <img :src="btnIcon" alt="">
                </div>
                 <div class="qr-code-box">
                    <img :src="QrCodeIcon" alt="二维码">
                    <p>下载来点app</p>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import btnIcon from '@/assets/img/activity/page4/btn.png'
    import QrCodeIcon from '@/assets/img/activity/page4/qrcode.png'
    export default {
        name: "PageFour",
        components: {
            Layout
        },
        props: {
            currentPage: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
              btnIcon,
              QrCodeIcon
            }
        },
        mounted() {

        },
        methods: {
            /**
             * 选择下一页
             */
            handleChangeSteg() {
                this.$emit('handleChangeSteg', 'STEG_TWO')
            }
        }
    }
</script>

<style scoped lang="scss">
   .page-wrapper{
       width: 100%;
       height: 100%;
       position: relative;
       box-sizing: border-box;
       padding: 2rem 0 1rem 0;
       .main-content-box{
           width: 100%;
           height: 100%;
           background:rgba(249,241,225,0.8);
           border-radius: 0.5rem;
           box-sizing: border-box;
           padding: 0.5rem;
           animation: move 2s;
           .item-box{
               width: 100%;
               box-sizing: border-box;
               padding: 0.2rem;
               h3{
                   font-size:0.85rem;
                   font-family:HappyZcool-2016;
                   font-weight:bold;
                   color:rgba(251,45,45,1);
                   line-height:1.3rem;
               }
               p{
                   font-size:0.7rem;
                   font-family:HappyZcool-2016;
                   font-weight:400;
                   color:rgba(31,33,37,1);
                   line-height:1rem;
               }
               p.min{
                   font-size: 0.6rem;
                   font-family:HappyZcool-2016;
                   font-weight:400;
                   color: #626363;
                   line-height:1rem;
               }
           }
           .btn-box{
               width: 7rem;
               height: 3rem;
               margin: 0.5rem auto 0 auto;
               img{
                   width: 100%;
               }
           }
       }
       .qr-code-box{
           margin: 0 auto;
           width: 5rem;
           height: 6rem;
           img{
               width: 5rem;
               height: 5rem;
           }
           p{
               font-size:0.6rem;
               font-family:PingFang SC;
               font-weight:bold;
               color:rgba(255,255,255,1);
               text-align: center;
           }
       }
   }
   @keyframes move {
       from {
           opacity: 0;
           margin-top: 6rem;
       }
       to {
           opacity: 1;
           margin-top: 0rem;
       }
   }
</style>
