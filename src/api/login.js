import axios from '@/config/axiosLogin'

/**
 * 登录
 */
export const postLogin = (params) => axios({
  method: 'post',
  url: `/auth/login`,
  data: params
})
