<template>
    <div class="layout-wrapper">
        <div class="layout-person">
            <div class="layout-header">
                <img :src="logoIcon" alt="logo">
                <img :src="activeIcon" alt="logo">
            </div>
            <div class="layout-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import logoIcon from '@/assets/img/common/logo_youxian.png'
    import personIcon from '@/assets/img/common/img_renwu.png'
    import activeIcon from '@/assets/img/common/logo_shipintoutiao.png'

    export default {
        name: "Layout",
        data () {
            return {
                logoIcon,
                activeIcon,
                personIcon,
                path: ''
            }
        },
        mounted() {
            this.path = this.$route.path;
        },
        watch:{
            $route(to,from){
                this.path = to.path
                console.log(to.path);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/mixin";
    .layout-wrapper{
        @include wh(100%, 100vh);
        background: url("../../../assets/img/common/img_bg.png");
        background-size: 100% 100%;
        .layout-person{
            @include wh(100%, 100vh);
            background: url("../../../assets/img/common/img_renwu.png");
            background-size: 100% auto;
            display: flex;
            flex-direction: column;
            position: relative;
            .btn-wrapper{
                position: absolute;
                right: 1.5rem;
                top: 2.8rem;
                img{
                    width: 3rem;
                }
            }
        }
        .layout-header{
            @include wh(100%, 2.5rem);
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 1rem;
            img{
                &:first-child{
                    width: 7rem;
                }
                &:last-child{
                    width: 4rem;
                }
            }
        }
        .layout-body{
            flex: 1;
            box-sizing: border-box;
            padding: 0 1rem;
        }
    }
    @keyframes heart{
        from{transform:translate(0,0)}
        to{transform:translate(0,1rem)}
    }
</style>
