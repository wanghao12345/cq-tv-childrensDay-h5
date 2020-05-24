<template>
    <Layout>
        <div class="complete-wrapper">
            <img class="img1" :src="img1" alt="img">
            <img class="img2" :src="img2" alt="img">
            <img class="img3" :src="img3" alt="img">
            <div class="video-wrapper">
                <img :src="img4" alt="img">
            </div>
            <p>来点智能机顶盒>>首页推荐>>视频头条</p>
            <div class="btn-list">
                <button @click="handleGobackClick">
                    <img :src="btn1" alt="btn">
                </button>
                <button @click="openShow">
                    <img :src="btn2" alt="btn">
                </button>
            </div>
        </div>
        <van-popup v-model="show" position="top">
            <img :src="img5" alt="img" @click="show = false">
        </van-popup>
        <van-loading
          class="loading"
          color="#6ACA71"
          v-if="loading"
        />
    </Layout>
</template>

<script>
    import Vue from 'vue';
    import { Popup, Notify, Loading } from 'vant';
    import 'vant/lib/popup/style'
    import 'vant/lib/notify/style'
    import 'vant/lib/loading/style'
    import Layout from "@/page/home/components/Layout";
    import img1 from '@/assets/img/complete/img_sc_1.png'
    import img2 from '@/assets/img/complete/img_sc_2.png'
    import img3 from '@/assets/img/complete/img_sc_3.png'
    import img4 from '@/assets/img/complete/img_shipin.png'
    import img5 from '@/assets/img/complete/img_share.png'

    import btn1 from '@/assets/img/complete/btn_zaitouyige.png'
    import btn2 from '@/assets/img/complete/btn_yaoqinyou.png'

    Vue.use(Popup).use(Notify).use(Loading);

    export default {
        name: "index",
        components: {
            Layout
        },
        data () {
            return {
                img1,
                img2,
                img3,
                img4,
                img5,
                btn1,
                btn2,
                show: false,
                loading: null
            }
        },
          mounted () {

          },
        methods: {
          openShow () {
            this.show = true
          },
          handleGobackClick () {
            this.$emit('handleChangePage', 3)
          }

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    @import "../../assets/css/font.css";
    .complete-wrapper{
        @include wh(100%, 95%);
        box-sizing: border-box;
        padding: 1rem 1rem;
        background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 95%);
        text-align: center;
        img{
            display: block;
            margin: 0rem auto;
            margin-bottom: 0.8rem;
            &.img1{
                width: 4.5rem;
                animation: move 2s;
            }
            &.img2{
                width: 9rem;
            }
            &.img3{
                width: 7rem;
            }
        }
        .video-wrapper{
            @include wh(90%, 7rem);
            border-radius: 1rem;
            margin: 0 auto;
            margin-bottom: 0.2rem;
            overflow: hidden;
            img{
                @include wh(100%, 100%);
            }
        }
        p{
            font-size: 0.7rem;
            font-family: FZShaoEr-M11S;
            font-weight:bold;
            color:rgba(255,255,255,1);
            background:rgba(153,212,62,1);
            border-radius:22px;
            padding: 0.2rem;
            display: inline;
        }
        .btn-list{
            display: flex;
            justify-content: space-between;
            margin-top: 0.6rem;
            box-sizing: border-box;
            padding: 0 0.5rem;
            button{
                width: 6rem;
                background: rgba(0,0,0,0);
                img{
                    width: 100%;
                }
            }
        }
    }
    .loading{
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -20px;
        margin-left: -20px;
    }
    /deep/.van-popup{
        background: rgba(0,0,0,0);
        text-align: center;
        box-sizing: border-box;
        padding-top: 5rem;
        img{
            width: 14rem;
        }
    }
    @keyframes move
    {
        from {
            opacity: 0;
            margin-top: 5rem;
        }
        to {
            opacity: 1;
            margin-top: 0rem;
        }
    }
</style>
