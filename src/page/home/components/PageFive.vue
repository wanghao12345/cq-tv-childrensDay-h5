<template>
    <Layout>
        <transition name="fade">
            <div class="page-wrapper" v-if="currentPage === 4">
                <img class="img0" :src="img0" alt="icon" />
                <img class="img1" :src="img1" alt="icon" />
                <img class="img2" :src="img2" alt="icon" />
                <img class="img3" :src="img3" alt="icon" />
                <img class="img4" :src="img4" alt="icon" />
                <img class="img5_1" :src="img5_1" alt="icon" />
                <img class="img5" :src="img5" alt="icon" />
                <img class="img6" :src="img6" alt="icon" @click="this.nextPageClick" />
            </div>
        </transition>
    </Layout>
</template>

<script>
    import Layout from "@/page/home/components/Layout";
    import img0 from '@/assets/img/page5/img_canyufansghi.png'
    import img1 from '@/assets/img/page5/img_5_1.jpg'
    import img2 from '@/assets/img/page5/img_5_2.png'
    import img3 from '@/assets/img/page5/img_5_3.png'
    import img4 from '@/assets/img/page5/img_5_4.png'
    import img5_1 from '@/assets/img/page5/img_5_5.png'
    import img5 from '@/assets/img/page5/img_erweima.png'
    import img6 from '@/assets/img/page5/btn_qutougao.png'
    export default {
        name: "PageFive",
        components: {
            Layout
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
                img2,
                img3,
                img4,
                img5_1,
                img5,
                img6
            }
        },
      methods: {
        nextPageClick () {
          this.$emit('handleChangePage', 2)
        }
      }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/mixin";
    .page-wrapper{
        @include wh(100%, 95%);
        background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 100%);
        text-align: left;
        box-sizing: border-box;
        padding: 1rem 1rem 0.6rem 1rem;
        img{
            width: 13.5rem;
            margin: 0.2rem 0;
            &.img0{
                width: 4.5rem;
                display: block;
                margin: 1rem auto;
                animation: move 2s;
            }
            &.img2{
                width: 13rem;
                margin-top: 0.5rem;
            }
            &.img3{
                width: 14rem;
                margin-top: -0.3rem;
            }
            &.img4{
                width: 12rem;
                display: none;
            }
            &.img5{
                width: 5.5rem;
                display: block;
                margin: 1rem auto 1rem;
            }
            &.img6{
                width: 8rem;
                display: block;
                margin: 0 auto;
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
