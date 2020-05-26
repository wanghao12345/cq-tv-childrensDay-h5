<template>
    <div class="activity-wrapper">
        <div class="steg-wrapper" v-show="stegStatus === 'STEG_ONE'">
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
                    <PageFour @handleChangeSteg="handleChangeSteg"></PageFour>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="steg-wrapper" v-show="stegStatus === 'STEG_TWO'">
            <PageFive></PageFive>    
        </div>

    
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'vant';
    import PageOne from './components/PageOne'
    import PageTwo from './components/PageTwo'
    import PageThree from './components/PageThree'
    import PageFour from './components/PageFour'
    import PageFive from './components/PageFive'

    Vue.use(Swipe);
    Vue.use(SwipeItem);
    export default {
        name: "Activity",
        components: {
            PageOne,
            PageTwo,
            PageThree,
            PageFour,
            PageFive
        },
        data () {
            return {
                stegStatus: 'STEG_ONE'
            }
        },
        mounted() {

        },
        methods: {
            /**
             * 改变页面显示
             */
            handleChangeSteg(val) {
                this.stegStatus = val
            }
        }
    }
</script>

<style scoped lang="scss">
   .activity-wrapper{
       width: 100%;
       height: 100%;
       .steg-wrapper{
            width: 100%;
            height: 100%;
       }
   }
</style>
