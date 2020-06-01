<template>
    <Layout>
        <div class="page-wrapper" v-if="currentPage === 3">
            <div class="text">
                <img :src="textImg" alt="textImg">
            </div>
            <div class="book">
                <img :src="bookImg" alt="bookImg">
            </div>
            <p>(购书卡以实物为准)</p>
        </div>
    </Layout>
</template>

<script>
    import Layout from "@/page/activity/components/Layout";
    import textImg from '@/assets/img/activity/page3/text.png'
    import bookImg from '@/assets/img/activity/page3/book.png'
    export default {
        name: "PageThree",
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
                textImg,
                bookImg
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
       .text{
           width: 100%;
           margin-top: 3rem;
           margin-bottom: 1rem;
           animation: move 2s;
           img{
                width: 100%;
           }
       }
       .book{
           width: 8rem;
           margin: 0rem auto;
           img{
                width: 100%;
           }
       }
       p{
           text-align: center;
           font-size: 0.6rem;
           color: black;
           font-weight: bold;
       }
   }
   @keyframes move {
       from {
           opacity: 0;
           margin-top: 6rem;
       }
       to {
           opacity: 1;
           margin-top: 3rem;
       }
   }
</style>
