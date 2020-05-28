<template>
    <Layout>
        <div class="page-wrapper">
            <div class="main-content-box">
                <div class="item-box">
                    <h3>短视频名称</h3>
                    <p>
                        <input type="text" v-model="params.videoname" placeholder="请输入视频名称"/>
                    </p>
                </div>
                <div class="item-box">
                    <h3>作者姓名</h3>
                    <p>
                        <input type="text" v-model="params.name" placeholder="请输入您的姓名"/>
                    </p>
                </div>
                <div class="item-box">
                    <h3>联系电话</h3>
                    <p>
                        <input type="text" v-model="params.phone" placeholder="请留下您的联系电话"/>
                    </p>
                </div>
                <div class="item-box">
                    <h3>上传短视频</h3>
                    <div class="upload-box">
                        <div class="img-box">
                            <img :src="uploadIcon" alt="uploadIcon" v-if="!params.video">
                            <img :src="reUploadIcon" alt="reUploadIcon" v-if="params.video">
                            <input class="video" type="file" ref="uploadFile" accept="video/*" @change="afterRead($event)">
                        </div>
                        <p class="min">时间5分钟以内，大小50M以内，格式为MP4或MOV</p>
                    </div>
                    <p class="tip">若视频大小超过50M，请投递至邮箱cenzonger@163.com(姓名+电话+视频名称)</p>
                    <p class="warn">投稿截至：2020年6月5日</p>
                </div>
                <div class="btn-box" @click="handleChangeSteg">
                    <img :src="btnIcon" alt="btnIcon">
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Vue from 'vue'
    import {Notify, Loading} from 'vant'
    import 'vant/lib/notify/style'
    import 'vant/lib/loading/style'

    import Layout from "@/page/activity/components/Layout";
    import btnIcon from '@/assets/img/activity/page5/btn.png'
    import uploadIcon from '@/assets/img/activity/page5/upload-icon.png'
    import reUploadIcon from '@/assets/img/activity/page5/reUpload.png'
    import axios from 'axios'

    Vue.use(Notify).use(Loading)
    export default {
        name: "PageFive",
        components: {
            Layout
        },
        data() {
            return {
                btnIcon,
                uploadIcon,
                reUploadIcon,
                params: {
                    videoname: '',
                    name: '',
                    phone: '',
                    video: ''
                }
            }
        },
        mounted() {

        },
        methods: {
            /**
             * 选择下一页
             */
            handleChangeSteg() {
                if (!this.params.videoname) {
                    Notify({ type: 'danger', message: '短视频名称不能为空！' });
                    return;
                }

                if (!this.params.name) {
                    Notify({ type: 'danger', message: '作者姓名不能为空！' });
                    return;
                }

                if (!this.params.phone) {
                    Notify({ type: 'danger', message: '联系电话不能为空！' });
                    return;
                }

                if (!(/^1[3456789]\d{9}$/.test(this.params.phone))) {
                    Notify({ type: 'danger', message: '联系电话格式不对！' });
                    return;
                }

                if (!this.params.video) {
                    Notify({ type: 'danger', message: '请先上传视频，视频不能为空！' });
                    return;
                }

                let formData = new FormData();
                formData.append('videoname', this.params.videoname);
                formData.append('name', this.params.name);
                formData.append('phone', this.params.phone);
                formData.append('video', this.params.video);

                let config = {
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }
                this.loading = true

                axios.post('https://huaxi.yunlingrobot.com/hd/201805video/submit.do', formData, config).then(res => {
                    if (res.status === 200 && res.data.code === '000') {
                        Notify({ type: 'success', message: '投稿成功！' });
                        this.$emit('handleChangeSteg', 'STEG_THREE')
                    } else {
                        Notify({ type: 'danger', message: '投稿失败！' });
                    }
                }).finally(() => {
                    this.loading = false
                }).catch(() => {
                    Notify({ type: 'danger', message: '投稿出错！' });
                })
            },
            /**
             * 上传视频
             */
            afterRead(e) {
                const file = e.target.files
                console.log(file[0].size);

                if (file[0].size > 50 * 1024 * 1024) {
                    Notify({type: 'danger', message: '上传视频超过了50M，请投递指定邮箱！'});
                    this.$refs.uploadFile.value = null;
                    return
                }

                let formData = new FormData();
                formData.append('file', file[0]);
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                this.loading = true
                axios.post('https://huaxi.yunlingrobot.com/hd/201805video/upload.do', formData, config).then(res => {
                    if (res.status === 200 && res.data.code === '000') {
                        this.params.video = res.data.path
                        Notify({type: 'success', message: '上传成功！'});
                    } else {
                        Notify({type: 'danger', message: '上传失败！'});
                    }
                }).finally(() => {
                    this.loading = false
                }).catch(() => {
                    Notify({type: 'danger', message: '上传出错！'});
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .page-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        padding: 2rem 0 1rem 0;
        .main-content-box {
            width: 100%;
            height: 100%;
            background: rgba(249, 241, 225, 0.8);
            border-radius: 0.5rem;
            box-sizing: border-box;
            padding: 0.5rem;
            .item-box {
                width: 100%;
                box-sizing: border-box;
                padding: 0.3rem 0.5rem;
                h3 {
                    font-size: 0.8rem;
                    font-family: HappyZcool-2016;
                    font-weight: bold;
                    color: rgba(251, 45, 45, 1);
                    margin-bottom: 0.2rem;
                }
                p {
                    input {
                        width: 100%;
                        height: 2.3rem;
                        border-radius: 2rem;
                        box-sizing: border-box;
                        border: 1px solid rgba(137, 137, 137, 1);
                        padding-left: 1rem;
                        font-size: 0.8rem;
                        font-family: HappyZcool-2016;
                        font-weight: 400;
                        color: rgba(31, 33, 37, 1);
                    }
                    input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        color: rgba(31, 33, 37, 1);
                    }
                    input::-moz-placeholder { /* Firefox 19+ */
                        color: rgba(31, 33, 37, 1);
                    }
                    input:-ms-input-placeholder { /* IE 10+ */
                        color: rgba(31, 33, 37, 1);
                    }
                    input:-moz-placeholder { /* Firefox 18- */
                        color: rgba(31, 33, 37, 1);
                    }
                }
                .upload-box {
                    display: flex;
                    margin-bottom: 0.5rem;
                    .img-box{
                        width: 4rem;
                        height: 4rem;
                        margin-right: 0.5rem;
                        position: relative;
                        background-color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 0.3rem;
                        img {
                            width: 2rem;
                            height: 2rem;
                        }
                        .video {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            opacity: 0;
                        }
                    }
                    p {
                        flex: 1;
                        font-size: 0.55rem;
                        font-family: HappyZcool-2016;
                        font-weight: 400;
                        color: rgba(112, 112, 112, 1);
                        display: flex;
                        flex-direction: column-reverse;
                    }
                }
                p.tip {
                    font-size: 0.55rem;
                    font-family: HappyZcool-2016;
                    font-weight: 400;
                    color: rgba(31, 33, 37, 1);
                }
                p.warn {
                    font-size: 0.55rem;
                    font-family: HappyZcool-2016;
                    font-weight: 500;
                    color: #FB2D2D;
                    margin-top: 1rem;
                }
            }
            .btn-box {
                width: 7rem;
                height: 3rem;
                margin: 1rem auto 0 auto;
                img {
                    width: 100%;
                }
            }
        }
        .qr-code-box {
            margin: 0 auto;
            width: 5rem;
            height: 6rem;
            img {
                width: 5rem;
                height: 5rem;
            }
            p {
                font-size: 0.6rem;
                font-family: PingFang SC;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                text-align: center;
            }
        }
    }
</style>
