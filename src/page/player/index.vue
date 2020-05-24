<template>
    <div class="video-box">
        <video
                controls
                playsinline="true"
                preload="true"
                autoplay
                id="videoDom"
                :src="video"
                v-if="video"
        >
        </video>
    </div>
</template>

<script>
    import video1 from '@/assets/img/common/video.mp4'
    export default {
        name: "Player",
        data () {
            return {
                video: ''
            }
        },
        mounted() {
            const url = this.$route.query.url
            if (url) {
                this.video = url
            } else {
                this.video = video1
            }
        }
    }
</script>

<style scoped>
    .video-box{
        width: 100%;
        height: 100%;
        background-color: black;
    }
    video{
        width: 100%;
        height: 100%;
    }
</style>
