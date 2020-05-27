<template>
    <Layout>
        <div class="page-wrapper">
            <div class="title">
                <img :src="titleImg" alt="title">
            </div>
            <div class="nav">
                <img :src="navImg" alt="nav">
            </div>
            <div class="video" @click="handlePlayer">

            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import titleImg from '@/assets/img/activity/page1/title.png'
    import navImg from '@/assets/img/activity/page1/nav-bg.png'
    export default {
        name: "PageOne",
        components: {
            Layout
        },
        data () {
            return {
                titleImg,
                navImg
            }
        },
        mounted() {

        },
        methods: {
            handlePlayer () {
                this.$router.push({
                    path: '/player',
                    query: {
                        // url: this.video
                        url: ''
                    }
                })
            },
        }

    }
</script>

<style scoped lang="scss">
   .page-wrapper{
       width: 100%;
       height: 100%;
       position: relative;
       .title{
           margin-top: 3rem;
           img{
               width: 100%;
           }
       }
       .nav{
           width: 10rem;
           margin: 0 auto;
           img{
               width: 100%;
           }
       }
       .video{
            width: 16rem;
            height: 10rem;
            background-color: white;
            border-radius: 0.5rem;
            margin: 0.5rem auto;
       }
   }
</style>
