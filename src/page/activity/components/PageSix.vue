<template>
    <Layout>
        <div class="page-wrapper">
            <div class="suc-icon-wrapper">
                <img :src="SucIcon" alt="SucIcon">
            </div>
            <div class="btn-list-wrapper">
                <div class="btn-item" @click="handleReTouClick">
                    <img :src="BtnIcon1" alt="BtnIcon1">
                </div>
                <div class="btn-item" @click="showShare = true">
                    <img :src="BtnIcon2" alt="BtnIcon2">
                </div>
            </div>
            <van-popup 
                v-model="showShare" 
                position="top"
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
    import ShareIcon from '@/assets/img/activity/page6/share.png'
    import BtnIcon1 from '@/assets/img/activity/page6/btn-zt.png'
    import BtnIcon2 from '@/assets/img/activity/page6/btn-yqccy.png'
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
                ShareIcon,
                BtnIcon1,
                BtnIcon2
            }
        },
        mounted() {

        },
        methods: {
            handleCloseSuc() {
                this.showSuc = false
                this.showShare = true
            },
            handleReTouClick() {
                this.$emit('handleChangeSteg', 'STEG_TWO')
            }
        }
    }
</script>

<style scoped lang="scss">
   .page-wrapper{
       width: 100%;
       height: 100%;
       box-sizing: border-box;
       padding-top: 5rem;
       .suc-icon-wrapper{
           width: 100%;
           text-align: center;
           img{
               width: 9rem;
           }
       }
       .btn-list-wrapper{
           display: flex;
           align-items: center;
           justify-content: space-between;
           margin-top: 2rem;
           box-sizing: border-box;
           padding: 0 1rem;
           .btn-item{
               width: 8rem;
               img{
                   width: 100%;
               }
           }
       }
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
