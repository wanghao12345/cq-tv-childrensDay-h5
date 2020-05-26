<template>
    <Layout>
        <div class="page-wrapper">
            <img :src="lineImg" alt="lineImg">
            <div class="page-bg-wrapper">

            </div>
        </div>
    </Layout>
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
   .page-wrapper{
       width: 100%;
       height: 100%;
       position: relative;
       box-sizing: border-box;
       padding-top: 7rem;
       img{
            position: absolute;
            width: 100%;
            top: 2rem;
            left: 0;
       }
       .page-bg-wrapper{
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)); ;
       }
   }
</style>
