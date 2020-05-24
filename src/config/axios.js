import axios from 'axios'
import { filterEmptyData } from '@/utils/url'

const serviceConfig = {
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'https://huaxi.yunlingrobot.com/hd/201804video',
  timeout: 5000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    // 'Content-type': 'application/json;charset=utf-8',
      'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()
    // 'Authorization': ''
  }
};

const service = axios.create(serviceConfig);

service.interceptors.request.use(
  config => {
    config.params && (config.params = filterEmptyData(config.params))
    config.url = encodeURI(config.url)
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200) {
      return res
    } else {
      Promise.reject(new Error(response.status || 'Error'))
    }
  },
  error => {
    return Promise.reject(error)
  }
);

export default service
