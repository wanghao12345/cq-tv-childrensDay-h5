<template>
    <Layout>
        <transition name="fade">
            <div class="page-wrapper" v-if="currentPage === 2">
                <img class="img1" :src="img1" alt="img">
                <img class="img2" :src="img2" alt="img">
                <div class="banner-wrapper">
                    <img class="img4" :src="img4" alt="img">
                    <img class="img5" :src="img5" alt="img">
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
    import img1 from '@/assets/img/page3/img_3_1.png'
    import img2 from '@/assets/img/page3/img_3_2.png'
    import img3 from '@/assets/img/page3/img_gopro.png'
    import img4 from '@/assets/img/page3/img_shouchiyuntai.png'
    import img5 from '@/assets/img/page3/img_zipaigan.png'

    export default {
        name: "PageTreen",
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
                img5
            }
        },
        mounted () {

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
        padding: 0rem 0 3rem 0;
        img{
            width: 7rem;
            margin: 1rem auto;
            &.img1{
                animation: move 2s;
            }
            &.img2{
                width: 9rem;
            }
        }
        .banner-wrapper{
            @include wh(17rem, 12rem);
            margin: 1rem auto;
            border-radius: 1.2rem;
            position: relative;
            .img3{
                width: 6rem;
                position: absolute;
                left: 10rem;
                top: 2rem;
            }
            .img4{
                width: 5rem;
                position: absolute;
                left: 2rem;
                top: 0.5rem;
            }
            .img5{
                width: 5rem;
                position: absolute;
                left: 6rem;
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
            margin-top: 1rem;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
