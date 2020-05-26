<template>
    <Layout>
        <div class="page-wrapper">
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
                <div class="btn-box">
                    <img :src="btnIcon" alt="">
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import btnIcon from '@/assets/img/activity/page4/btn.png'
    export default {
        name: "PageFour",
        components: {
            Layout
        },
        data () {
            return {
              btnIcon
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
   .page-wrapper{
       width: 100%;
       height: 100%;
       position: relative;
       .main-content-box{
           position: absolute;
           left: 0;
           bottom: 6rem;
           width: 100%;
           height: 17rem;
           background-color: white;
           border-radius: 0.5rem;
           .item-box{
               width: 100%;
               box-sizing: border-box;
               padding: 0.2rem 0.5rem;
               h3{
                   font-size:0.7rem;
                   font-family:HappyZcool-2016;
                   font-weight:bold;
                   color:rgba(251,45,45,1);
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
               width: 6rem;
               height: 3rem;
               margin: 0 auto;
               img{
                   width: 100%;
                   height: 100%;
               }
           }
       }
   }
</style>
