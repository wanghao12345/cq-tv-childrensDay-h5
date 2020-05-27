<template>
    <Layout>
        <div class="page-wrapper">
            <div class="main-content-box">
                <div class="item-box">
                    <h3>短视频名称</h3>
                    <p>
                        <input type="text" placeholder="请输入视频名称" />
                    </p>
                </div>
                <div class="item-box">
                   <h3>作者姓名</h3>
                    <p>
                        <input type="text" placeholder="请输入您的姓名" />
                    </p>
                </div>
                <div class="item-box">
                   <h3>联系电话</h3>
                    <p>
                        <input type="text" placeholder="请留下您的联系电话" />
                    </p>
                </div>
                <div class="item-box">
                    <h3>上传短视频</h3>
                    <div class="upload-box">
                        <img :src="uploadIcon" alt="uploadIcon">
                        <p class="min">时间5分钟以内，大小50M以内，格式为MP4或MOV</p>
                    </div>
                    <p class="tip">若视频大小超过50M，请投递至邮箱cenzonger@163.com(姓名+电话+视频名称)</p>
                    <p class="warn">投稿截至：2020年6月5日</p>
                </div>
                <div class="btn-box" @click="handleChangeSteg">
                    <img :src="btnIcon" alt="btnIcon">
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import btnIcon from '@/assets/img/activity/page5/btn.png'
    import uploadIcon from '@/assets/img/activity/page5/upload-icon.png'
    export default {
        name: "PageFive",
        components: {
            Layout
        },
        data () {
            return {
                btnIcon,
                uploadIcon
            }
        },
        mounted() {

        },
        methods: {
            /**
             * 选择下一页
             */
            handleChangeSteg() {
                this.$emit('handleChangeSteg', 'STEG_THREE')
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
       padding: 2.5rem 0 2rem 0;
       .main-content-box{
           width: 100%;
           height: 100%;
           background:rgba(249,241,225,0.8);
           border-radius: 0.5rem;
           box-sizing: border-box;
           padding: 0.5rem;
           .item-box{
               width: 100%;
               box-sizing: border-box;
               padding: 0.3rem 0.5rem;
               h3{
                   font-size: 0.9rem;
                   font-family:HappyZcool-2016;
                   font-weight:bold;
                   color:rgba(251,45,45,1);
                   margin-bottom: 0.3rem;
               }
               p{
                   input{
                        width: 100%;
                        height: 2.4rem;
                        border-radius: 2rem;
                        box-sizing: border-box;
                        border:1px solid rgba(137,137,137,1);
                        padding-left: 1rem;
                        font-size: 0.8rem;
                        font-family:HappyZcool-2016;
                        font-weight:400;
                        color:rgba(31,33,37,1);
                   }
                    input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        color:rgba(31,33,37,1);
                    }
                    input::-moz-placeholder { /* Firefox 19+ */
                        color:rgba(31,33,37,1);
                    }
                    input:-ms-input-placeholder { /* IE 10+ */
                        color:rgba(31,33,37,1);
                    }
                    input:-moz-placeholder { /* Firefox 18- */
                        color:rgba(31,33,37,1);
                    }
               }
               .upload-box{
                   display: flex;
                   margin-bottom: 0.5rem;
                   img{
                       width: 5rem;
                       height: 5rem;
                       margin-right: 0.5rem;
                   }
                   p{
                        font-size:0.55rem;
                        font-family:HappyZcool-2016;
                        font-weight:400;
                        color:rgba(112,112,112,1);
                        display: flex;
                        flex-direction: column-reverse;
                   }
               }
               p.tip{
                    font-size:0.55rem;
                    font-family:HappyZcool-2016;
                    font-weight:400;
                    color:rgba(31,33,37,1);
               }
               p.warn{
                    font-size:0.55rem;
                    font-family:HappyZcool-2016;
                    font-weight:500;
                    color:#FB2D2D;
                    margin-top: 1rem;
               }
           }
           .btn-box{
               width: 7rem;
               height: 3rem;
               margin: 1rem auto 0 auto;
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
</style>
