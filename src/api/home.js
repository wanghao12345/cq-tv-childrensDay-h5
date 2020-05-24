/**
 * Created by wanghao on 2020/1/27
 */
import axios from '@/config/axios'

// 上传
export const uploadRequest = (data) => axios({
  method: 'post',
  url: `/upload.do`,
  data
})

// 提交作品
export const submitRequest = (data) => axios({
  method: 'post',
  url: `/submit.do`,
  data
})


