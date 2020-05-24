<template>
    <Layout>
        <div class="page-wrapper">
            <div class="title"></div>
            <div class="video">

            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    export default {
        name: "PageOne",
        components: {
            Layout
        },
        data () {
            return {
           
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
       .title{
            width: 16rem;
            height: 2.6rem;
            background: white;
            position: absolute;
            border-radius: 3rem;
            left: 50%;
            margin-left: -8rem;
            top: 10rem;
       }
       .video{
            position: absolute;
            left: 50%;
            margin-left: -8.5rem;
            bottom: 4rem;
            width: 17rem;
            height: 13rem;
            background: url('../../../assets/img/activity/page1/video.png');
            background-size: 100% 100%;
       }
   }
</style>
