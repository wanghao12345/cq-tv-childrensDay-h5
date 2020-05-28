<template>
    <div class="video-box">
        <iframe src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=fc5ecad7983259ed852886001956876d&tvId=16447350300&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Player",
        data () {
            return {
                video: ''
            }
        },
        mounted() {
      
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
