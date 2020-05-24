<template>
    <Layout>
        <div class="upload-wrapper">
            <div class="upload-content-wrapper">
                <ul>
                    <li>
                        <div class="title">短视频名称</div>
                        <div class="input">
                            <input type="text" v-model="videoname">
                        </div>
                    </li>
                    <li>
                        <div class="title">作者姓名</div>
                        <div class="input">
                            <input type="text" v-model="name">
                        </div>
                    </li>
                    <li>
                        <div class="title">联系电话</div>
                        <div class="input">
                            <input type="text" v-model="phone">
                        </div>
                    </li>
                    <li>
                        <div class="title">
                            <span>上传短视频</span>
                            <span v-if="video" class="red">
                                重新上传
                                <input type="file" accept="video/*" @change="afterRead($event)">
                            </span>
                        </div>
                        <div class="input video">
                            <div class="video-content video-no-content" v-if="!video">
                                <input type="file" ref="uploadFile" accept="video/*" @change="afterRead($event)">
                                <img :src="addIcon" alt="icon">
                            </div>
                           <div class="video-content" v-else  @click="handlePlayer">
                               <video
                                   :src="video"
                                   id="video"
                                   style="display: none"
                               ></video>
                               <div class="poster-img" v-if="video" id="poster-img">
                                   <img :src="posterImg" alt="">
                                   <img style="display: none" class="player-icon" :src="playerIcon" alt="">
                               </div>
                           </div>
                        </div>
                    </li>
                    <li id="img-box">

                    </li>
                </ul>
                <p>投稿截至：2020年5月20日</p>
                <button @click="handleSubmit">
                    <img :src="btnImg" alt="button">
                </button>
            </div>
            <div class="btn-wrapper" @click="handleReload">
                <img :src="btnIcon" alt="btnIcon">
            </div>
        </div>
        <van-loading
            class="loading"
            color="#6ACA71"
            v-if="loading"
        />
    </Layout>
</template>

<script>
    import Vue from 'vue'
    import { Notify, Loading } from 'vant'
    import 'vant/lib/notify/style'
    import 'vant/lib/loading/style'
    import Layout from "@/page/home/components/Layout";
    import addIcon from '@/assets/img/upload/icon_add.jpg'
    import btnImg from '@/assets/img/upload/btn_quedingtougao.png'
    import playerIcon from '@/assets/img/upload/player-icon.png'
    import videoPoster from '@/assets/img/upload/video-poster.png'
    import btnIcon from '@/assets/img/common/btn_back.png'
    import axios from 'axios'

    Vue.use(Notify).use(Loading)
    export default {
        name: "Upload",
        components: {
            Layout
        },
        data () {
            return {
                videoname: '',
                name: '',
                phone: '',
                video: '',
                addIcon,
                btnImg,
                playerIcon,
                btnIcon,
                loading: null,
                posterImg: videoPoster
            }
        },
        methods: {
          handleReload () {
            // location.reload()
            this.$emit('handleReload', 1)
          },
            handlePlayer () {
              this.$router.push({
                  path: '/player',
                  query: {
                      url: this.video
                  }
              })
            },

            afterRead(e) {
              const file = e.target.files
              console.log(file[0].size);

              if (file[0].size > 50 * 1024 * 1024) {
                Notify({ type: 'danger', message: '上传视频超过了50M，请投递指定邮箱！' });
                this.$refs.uploadFile.value = null;
                return
              }

              let formData = new FormData();
                formData.append('file', file[0]);
                let config = {
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }
                this.loading = true
                axios.post('https://huaxi.yunlingrobot.com/hd/201804video/upload.do', formData, config).then(res => {
                    if (res.status === 200 && res.data.code === '000') {
                        this.video = res.data.path
                        Notify({ type: 'success', message: '上传成功！' });
                    } else {
                        Notify({ type: 'danger', message: '上传失败！' });
                    }
                }).finally(() => {
                    this.loading = false
                }).catch(() => {
                    Notify({ type: 'danger', message: '上传出错！' });
                })
            },

            handleSubmit () {
                if (!this.videoname) {
                    Notify({ type: 'danger', message: '短视频名称不能为空！' });
                    return;
                }

                if (!this.name) {
                    Notify({ type: 'danger', message: '作者姓名不能为空！' });
                    return;
                }

                if (!this.phone) {
                    Notify({ type: 'danger', message: '联系电话不能为空！' });
                    return;
                }

                if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
                    Notify({ type: 'danger', message: '联系电话格式不对！' });
                    return;
                }

                if (!this.video) {
                    Notify({ type: 'danger', message: '请先上传视频，视频不能为空！' });
                    return;
                }

                let formData = new FormData();
                formData.append('videoname', this.videoname);
                formData.append('name', this.name);
                formData.append('phone', this.phone);
                formData.append('video', this.video);

                let config = {
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }
                this.loading = true

                axios.post('https://huaxi.yunlingrobot.com/hd/201804video/submit.do', formData, config).then(res => {
                    if (res.status === 200 && res.data.code === '000') {
                        Notify({ type: 'success', message: '投稿成功！' });
                        this.$emit('handleChangePage', 3)
                        // this.$router.push('/complete')
                    } else {
                        Notify({ type: 'danger', message: '投稿失败！' });
                    }
                }).finally(() => {
                    this.loading = false
                }).catch(() => {
                    Notify({ type: 'danger', message: '投稿出错！' });
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/mixin";
    @import "../../assets/css/font.css";
    .upload-wrapper{
        @include wh(100%, 95%);
        box-sizing: border-box;
        padding: 1rem 1rem;
        background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.6) 100%);
        position: relative;
        .upload-content-wrapper{
            @include wh(100%, 100%);
            box-sizing: border-box;
            animation: move 2s;
            ul{
                li{
                    margin-bottom: 0.5rem;
                    .title{
                        font-size: 0.82rem;
                        font-family:FZShaoEr-M11S;
                        font-weight:400;
                        color:rgba(141,186,76,1);
                        margin-bottom: 0.2rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: relative;
                        span{
                            font-size: 0.82rem;
                            font-family:FZShaoEr-M11S;
                            font-weight:400;
                            color:rgba(141,186,76,1);
                            &:first-child{

                            }
                            &.red{
                                width: 50%;
                                color: #FF9898;
                                text-align: right;
                            }
                        }
                        input{
                            width: 50%;
                            position: absolute;
                            right: 0;
                            top: 0;
                            opacity: 0;
                            font-size: 0.9rem;
                        }
                    }
                    .input{
                        width: 100%;
                        height: 2.1rem;
                        background:rgba(242,255,243,1);
                        border: 0.1rem solid rgba(219,255,223,1);
                        border-radius: 1rem;
                        &.video{
                            height: 8.5rem;
                            border-radius: 1rem;
                            .video-content{
                                width: 100%;
                                height: 100%;
                                position: relative;
                                input{
                                    opacity: 0;
                                    position: absolute;
                                    @include wh(100%, 100%);
                                    left: 0;
                                    top: 0;
                                    z-index: 2;
                                }
                                img{
                                    position: absolute;
                                    left: 50%;
                                    top: 0.5rem;
                                    width: 12rem;
                                    height: 7rem;
                                    margin-left: -6rem;
                                    z-index: 1;
                                }
                                video{
                                    width: 100%;
                                    height: 100%;
                                    opacity: 1;
                                }
                                .poster-img{
                                    width: 100%;
                                    height: 100%;
                                    left: 0;
                                    top: 0;
                                    margin: 0;
                                    border-radius: 1rem;
                                    position: absolute;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                        left: 0;
                                        top: 0;
                                        margin: 0;
                                        border-radius: 1rem;
                                        &.player-icon{
                                            width: 2rem;
                                            height: 2rem;
                                            left: 50%;
                                            top: 50%;
                                            position: absolute;
                                            margin: -1rem;
                                        }
                                    }
                                    .player-icon{
                                        display: block;
                                    }
                                }
                            }

                        }
                        input{
                            @include wh(100%, 100%);
                            border-radius: 1rem;
                            background: rgba(0,0,0,0);
                            box-sizing: border-box;
                            padding-left: 1rem;
                            font-family:FZShaoEr-M11S;
                            font-weight:400;
                            color: #345800;
                            font-size: 0.9rem;
                        }
                    }
                }
            }
            p{
                font-family:FZShaoEr-M11S;
                font-weight:400;
                color:rgba(141,186,76,1);
                font-size: 0.7rem;
            }
            button{
                width: 8rem;
                display: block;
                margin: 1rem auto;
                background: rgba(0,0,0,0);
                img{
                    width: 100%;
                }
            }
        }
        .btn-wrapper{
            position: absolute;
            top: -0.5rem !important;
            left: 0rem !important;
            z-index: 999999;
            img{
                width: 3rem;
            }
        }
    }
    .loading{
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -20px;
        margin-left: -20px;
    }
    @keyframes move
    {
        from {
            opacity: 0;
            margin-top: 5rem;
        }
        to {
            opacity: 1;
            margin-top: 0rem;
        }
    }
</style>
