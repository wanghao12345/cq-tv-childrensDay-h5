<template>
    <Layout>
        <div class="page-wrapper" v-if="currentPage === 1">
            <div class="title">
                <img :src="titleImg" alt="title">
            </div>
            <div class="nav">
                <img :src="navImg" alt="nav">
            </div>
            <div class="video" @click="handlePlayer">
                <img :src="videoImg" alt="videoImg">
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import titleImg from '@/assets/img/activity/page1/title.png'
    import navImg from '@/assets/img/activity/page1/nav-bg.png'
    import videoImg from '@/assets/img/activity/page1/video.jpg'
    export default {
        name: "PageOne",
        components: {
            Layout
        },
        props: {
            currentPage: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                titleImg,
                navImg,
                videoImg
            }
        },
        mounted() {

        },
        methods: {
            handlePlayer () {
                // this.$router.push({
                //     path: '/player/url'
                // })
                window.location.href = 'http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=fc5ecad7983259ed852886001956876d&tvId=16447350300&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%25&width=100%25'
            },
        }

    }
</script>

<style scoped lang="scss">
   .page-wrapper{
       width: 100%;
       height: 100%;
       position: relative;
       animation: move 2s;
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
            box-sizing: border-box;
            padding: 0.2rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.5rem;
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
           margin-top: 0rem;
       }
   }
</style>
