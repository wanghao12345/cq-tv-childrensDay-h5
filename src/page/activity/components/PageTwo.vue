<template>
   <div class="page-wrapper">
        <img :src="lineImg" alt="lineImg" v-if="currentPage === 2">
        <div class="page-bg-wrapper">

        </div>
    </div>
</template>

<script>
    import lineImg from '@/assets/img/activity/page2/line-img.png'
    export default {
        name: "PageTwo",
        components: {

        },
        props: {
            currentPage: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                lineImg
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    /deep/.layout-wrapper{
        width: 100%;
        height: 100%;
        background: url('../../../assets/img/activity/page2/bg-img.png');
        background-size: 100% 100%;
    }
   .page-wrapper{
       width: 100%;
       height: 100%;
       position: relative;
       box-sizing: border-box;
       padding-top: 7rem;
       background: url('../../../assets/img/activity/page2/bg-img.png');
       background-size: 100% 100%;
       img{
            position: absolute;
            width: 90%;
            top: 4rem;
            left: 5%;
            animation: move 2s;
       }
       .page-bg-wrapper{
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
            display: none;
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
</style>
