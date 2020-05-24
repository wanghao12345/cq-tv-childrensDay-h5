<template>
    <Layout>
        <transition name="fade">
            <div class="page-wrapper" v-if="currentPage === 1">
                <img class="img1" :src="img1" alt="img">
                <img class="img2" :src="img2" alt="img">
                <img class="img3" :src="img3" alt="img">
                <div class="banner-wrapper" @click="handlePlayerVideo">
                    <div class="video-wrapper">
                        <!-- <video
                             controls
                             autoplay
                             id="video"
                         >
                             <source
                                 :src="video"
                                 type="video/mp4"
                             >
                         </video>-->
                        <img :src="img6" alt="封面">
                    </div>
                    <img class="img4" :src="img4" alt="img">
                </div>
                <p>来点智能机顶盒>>首页推荐>>视频头条</p>
            </div>
        </transition>
        <Bottom />
    </Layout>
</template>

<script>
    import Layout from "@/page/home/components/Layout";
    import Bottom from "@/page/home/components/Bottom";
    import img1 from '@/assets/img/page2/img_2_1.png'
    import img2 from '@/assets/img/page2/img_2_2.png'
    import img3 from '@/assets/img/page2/img_2_3.png'
    import img4 from '@/assets/img/page1/img_shipin@2x.png'
    import img5 from '@/assets/img/page2/img_link.png'
    import img6 from '@/assets/img/page2/poster.jpeg'

    import video from '@/assets/img/common/video.mp4'

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
                img4,
                img5,
                img6,
                video
            }
        },
        mounted () {

        },
        methods: {
            handlePlayerVideo () {
                this.$router.push('/player')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/mixin";
    @import "~swiper/css/swiper.css";
    @import "../../../assets/css/font.css";
    .page-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0rem 0 3rem 0;
        img{
            width: 9rem;
            margin: 0 auto;
            margin-bottom: 1rem;
            &.img1{
                animation: move 2s;
            }
            &.img2{
               width: 4.5rem;
            }
        }
        .banner-wrapper{
            @include wh(17rem, 10rem);
            margin: 1rem auto;
            border-radius: 1.2rem;
            position: relative;
            overflow: hidden;
            .video-wrapper{
                position: absolute;
                @include wh(16.3rem, 9.4rem);
                z-index: 1;
                border-radius: 1.2rem;
                left: 0.3rem;
                top: 0.3rem;
                overflow: hidden;
                video{
                    @include wh(100%, 100%);
                    border-radius: 1.2rem;
                    -moz-border-radius: 1.2rem;
                    -webkit-border-radius: 1.2rem;
                }
                img{
                    @include wh(100%, 100%);
                }
            }
            .img4{
                position: absolute;
                width: 18.1rem;
                height: 10.2rem;
                left: -0.75rem;
                top: 0;
                z-index: 2;
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>
