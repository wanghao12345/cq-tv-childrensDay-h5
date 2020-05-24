<template>
    <Layout>
        <transition name="fade">
            <div class="page-wrapper" v-if="currentPage === 0">
                <img class="img1" :src="img1" alt="img">
                <img class="img2" :src="img2" alt="img">
                <div class="banner-wrapper">
                    <div class="swiper-container1">
                        <div class="swiper-wrapper">
                            <div
                                    class="swiper-slide"
                                    v-for="(item, index) of bannerData"
                                    :key="'banner' + index"
                            >
                                <img :src="item" alt="banner">
                            </div>
                        </div>
                    </div>
                    <img class="img3" :src="img3" alt="img">
                </div>
            </div>
        </transition>
        <Bottom />
    </Layout>
</template>

<script>
    import Layout from "@/page/home/components/Layout";
    import Bottom from "@/page/home/components/Bottom";
    import img1 from '@/assets/img/page1/img_shangtout.png'
    import img2 from '@/assets/img/page1/img_yunchunyou.png'
    import img3 from '@/assets/img/page1/img_shipin@2x.png'
    import banner1 from '@/assets/img/page1/1.png'
    import banner2 from '@/assets/img/page1/2.png'
    import banner3 from '@/assets/img/page1/3.png'
    import banner4 from '@/assets/img/page1/4.png'
    import banner5 from '@/assets/img/page1/5.png'
    import banner6 from '@/assets/img/page1/6.png'
    import banner7 from '@/assets/img/page1/7.png'
    import banner8 from '@/assets/img/page1/8.png'

    import Swiper from 'swiper'
    export default {
        name: "PageOne",
        components: {
            Layout,
            Bottom
        },
        props: {
            currentPage: {
                type: Number,
                default: 0
            }
        },
        watch: {
            currentPage: {
                handler (newVal, oldVal) {
                    if (newVal === 1) {

                    }
                },
                immediate: true,
                deep: true
            }
        },
        data () {
            return {
                img1,
                img2,
                img3,
                bannerData: [banner1, banner2, banner4, banner5, banner6, banner7, banner8]
            }
        },
        mounted () {
            new Swiper('.swiper-container1', {
                effect : 'fade',
                loop : true,
                autoplay:true
            })
        },
    }
</script>

<style scoped lang="scss">
    @import "../../../style/mixin";
    @import "~swiper/css/swiper.css";
    .page-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 1rem 0 3rem 0;
        .audio{
            position: fixed;
            top: 0;
            opacity: 0;
        }
        img{
            width: 90%;
            margin: 0 auto;
            &.img1{
                animation: move 2s;
            }
            &.img2{
                width: 75%;
                margin-top: 1rem;
            }
        }
        .banner-wrapper{
            @include wh(16.4rem, 10rem);
            margin: 2rem auto;
            border-radius: 1.2rem;
            position: relative;
            .swiper-container1{
                @include wh(100%, 100%);
                overflow: hidden;
                .swiper-slide{
                    @include wh(100%, 100%);
                    border-radius: 1.2rem;
                    overflow: hidden;
                    img{
                        @include wh(100%, 100%);
                        border-radius: 1.2rem;
                    }
                }
            }
            .img3{
                position: absolute;
                width: 18.1rem;
                height: 10.2rem;
                left: -0.75rem;
                top: 0;
                z-index: 999;
            }
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
