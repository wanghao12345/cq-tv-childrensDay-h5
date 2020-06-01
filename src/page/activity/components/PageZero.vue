<template>
    <div class="page-wrapper">
            <!-- <img :src="contentImg" alt="contentImg"> -->
    </div>
</template>

<script>
    import contentImg from '@/assets/img/activity/page0/content.png'
    export default {
        name: "PageZero",
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
                contentImg
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
        background: url('../../../assets/img/activity/page0/bg.jpg');
        background-size: 100% 100%;
    }
   .page-wrapper{
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        background: url('../../../assets/img/activity/page0/bg.jpg');
        background-size: 100% 100%;
       img{
            position: absolute;
            width: 16rem;
            top: 3rem;
            left: 50%;
            margin-left: -8rem;
       }
   }
</style>
