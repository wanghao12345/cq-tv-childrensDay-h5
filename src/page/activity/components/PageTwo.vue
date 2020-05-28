<template>
   <div class="page-wrapper">
        <img :src="lineImg" alt="lineImg">
        <div class="page-bg-wrapper">

        </div>
    </div>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import lineImg from '@/assets/img/activity/page2/line-img.png'
    export default {
        name: "PageTwo",
        components: {
            Layout
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
       }
       .page-bg-wrapper{
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
            display: none;
       }
   }
</style>
