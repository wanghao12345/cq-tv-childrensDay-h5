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
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';
    import PageOne from './components/PageOne'

    Vue.use(Swipe);
    Vue.use(SwipeItem);
    export default {
        name: "Activity",
        components: {
            PageOne
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
