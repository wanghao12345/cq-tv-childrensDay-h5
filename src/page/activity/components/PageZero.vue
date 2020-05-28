<template>
    <Layout>
        <div class="page-wrapper">
            <img :src="contentImg" alt="contentImg">
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import contentImg from '@/assets/img/activity/page0/content.png'
    export default {
        name: "PageZero",
        components: {
            Layout
        },
        data () {
            return {
                contentImg
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
       img{
            position: absolute;
            width: 16rem;
            top: 50%;
            left: 50%;
            margin-left: -8rem;
            margin-top: -11rem;
       }
   }
</style>
