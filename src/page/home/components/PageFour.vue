<template>
    <Layout>
        <transition name="fade">
            <div class="page-wrapper" v-if="currentPage === 3">
                <img class="img0" :src="img0" alt="icon">
                <div class="img-box">
                    <img class="img1" :src="img1" alt="icon">
                    <img class="img1" :src="img1_1" alt="icon">
                </div>
                <div class="img-box">
                    <img class="img2" :src="img2" alt="icon">
                    <img class="img2" :src="img2_1" alt="icon">
                </div>
                <div class="img-box">
                    <img class="img3" :src="img3" alt="icon">
                    <img class="img3" :src="img3_1" alt="icon">
                </div>
                <div class="img-box">
                    <img class="img4" :src="img4" alt="icon">
                    <img class="img4" :src="img4_1" alt="icon">
                </div>
            </div>
        </transition>
        <Bottom />
    </Layout>
</template>

<script>
    import Layout from "@/page/home/components/Layout";
    import Bottom from "@/page/home/components/Bottom";
    import img0 from '@/assets/img/page4/img_jiangxiangshezhi.png'
    import img1 from '@/assets/img/page4/img_4_1@2x.png'
    import img1_1 from '@/assets/img/page4/img_4_1w.png'
    import img2 from '@/assets/img/page4/img_4_2@2x.png'
    import img2_1 from '@/assets/img/page4/img_4_2w.png'
    import img3 from '@/assets/img/page4/img_4_3@2x.png'
    import img3_1 from '@/assets/img/page4/img_4_3w.png'
    import img4 from '@/assets/img/page4/img_4_4@2x.jpg'
    import img4_1 from '@/assets/img/page4/img_4_4w.jpg'
    export default {
        name: "PageFour",
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
                img0,
                img1,
                img1_1,
                img2,
                img2_1,
                img3,
                img3_1,
                img4,
                img4_1
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/mixin";
    .page-wrapper{
        @include wh(100%, 95%);
        background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
        text-align: center;
        box-sizing: border-box;
        padding: 1rem 0;
        img{
            &.img0{
                width: 4.5rem;
                margin-bottom: 1rem;
                margin-top: 1rem;
                animation: move 2s;
            }
        }
        .img-box{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding-left: 1rem;
            margin-bottom: 0.8rem;
            img{
                &:first-child{
                    width: 4rem;
                }
                &:last-child{
                    width: 5.2rem;
                    margin-left: 1rem;
                }
            }
            img.img1{
                &:first-child{
                    width: 4rem;
                }
                &:last-child{
                    width: 7rem;
                    margin-left: 1rem;
                }
            }
            img.img4{
                &:first-child{
                    width: 4rem;
                    margin-top: -0.8rem;
                }
                &:last-child{
                    width: 8rem;
                    margin-left: 1rem;
                }
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
