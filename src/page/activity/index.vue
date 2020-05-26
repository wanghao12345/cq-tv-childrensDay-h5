<template>
    <div class="activity-wrapper">
        <van-swipe
            style="height: 100%;"
            vertical
            :loop="false"
        >
            <van-swipe-item>
                <PageOne></PageOne>
            </van-swipe-item>
            <van-swipe-item>
                <PageTwo></PageTwo>
            </van-swipe-item>
            <van-swipe-item>
                <PageThree></PageThree>
            </van-swipe-item>
            <van-swipe-item>
                <PageFour></PageFour>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';
    import PageOne from './components/PageOne'
    import PageTwo from './components/PageTwo'
    import PageThree from './components/PageThree'
    import PageFour from './components/PageFour'

    Vue.use(Swipe);
    Vue.use(SwipeItem);
    export default {
        name: "Activity",
        components: {
            PageOne,
            PageTwo,
            PageThree,
            PageFour
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
   .activity-wrapper{
       width: 100%;
       height: 100%;
   }
</style>
