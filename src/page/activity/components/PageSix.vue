<template>
    <Layout>
        <div class="page-wrapper">
            <van-popup v-model="showSuc">
                <div class="suc-box">
                    <div class="suc-top">
                        <img :src="SucIcon" alt="SucIcon">
                    </div>
                    <div class="suc-bottom" @click="handleCloseSuc">
                        <img :src="CloseIcon" alt="CloseIcon">
                    </div>
                </div>
            </van-popup>
            <van-popup 
                v-model="showShare" 
                position="top"
                :close-on-click-overlay="false"
            >
                <div class="share-box">
                    <img :src="ShareIcon" alt="ShareIcon">
                </div>
            </van-popup>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import SucIcon from '@/assets/img/activity/page6/success-img.png'
    import CloseIcon from '@/assets/img/activity/page6/close-icon.png'
    import ShareIcon from '@/assets/img/activity/page6/share.png'
    import Vue from 'vue';
    import { Popup } from 'vant';
    import 'vant/lib/popup/style'

    Vue.use(Popup);
    export default {
        name: "PageSix",
        components: {
            Layout
        },
        data () {
            return {
                showSuc: true,
                showShare: false,
                SucIcon,
                CloseIcon,
                ShareIcon
            }
        },
        mounted() {

        },
        methods: {
            handleCloseSuc() {
                this.showSuc = false
                this.showShare = true
            }
        }
    }
</script>

<style scoped lang="scss">
   .page-wrapper{
       width: 100%;
       height: 100%;
       /deep/.van-popup{
           background: rgba(0,0,0,0);
       }
       .suc-box{
           width: 12rem;
           .suc-top{
               img{
                   width: 100%;
               }
           }
           .suc-bottom{
               width: 1.5rem;
               margin: 1rem auto;
               img{
                   width: 100%;
               }
           }
       }
       .share-box{
           box-sizing: border-box;
           padding: 3rem 2rem;
           img{
               width: 100%;
           }
       }
   }
</style>
