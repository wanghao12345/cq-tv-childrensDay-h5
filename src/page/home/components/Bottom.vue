<template>
    <div class="layout-bottom">
        <img :src="downIcon" alt="">
    </div>
</template>

<script>
    import downIcon from '@/assets/img/common/down.png'
    export default {
        name: "Bottom",
        data () {
            return {
                downIcon
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout-bottom{
        width: 100%;
        position: absolute;
        bottom: 0.5rem;
        left: 0;
        text-align: center;
        img{
            width: 1.5rem;
            animation: heart 1.3s ease-in-out 2.7s infinite alternate;
        }
    }
    @keyframes heart{
        from{transform:translate(0,0)}
        to{transform:translate(0,1rem)}
    }
</style>
