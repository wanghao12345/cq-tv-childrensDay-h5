import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: '/h5/',
  routes: [
    {
      path: '/',
      name: 'Activity',
      meta: {
        title: '六一儿童节',
        toolBar: true,
        keepAlive: true
      },
      component: resolve => require(['@/page/activity'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        title: '首页',
        toolBar: true,
        keepAlive: true
      },
      component: resolve => require(['@/page/home'], resolve)
    },
    {
      path: '/upload',
      name: 'Upload',
      meta: {
        title: '上传',
        toolBar: true,
        keepAlive: true
      },
      component: resolve => require(['@/page/upload'], resolve)
    },
    {
      path: '/complete',
      name: 'Complete',
      meta: {
        title: '完成',
        toolBar: true,
        keepAlive: true
      },
      component: resolve => require(['@/page/complete'], resolve)
    },
    {
      path: '/player',
      name: 'Player',
      meta: {
        title: '播放',
        toolBar: true,
        keepAlive: false
      },
      component: resolve => require(['@/page/player'], resolve)
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  next()
})

// router.afterEach((to, from)=>{
//   let u = navigator.userAgent;
//   if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
//     if (window.configUrl == '' || window.configUrl == undefined) {
//       window.configUrl = 'https://weixin.phoenix-resonance.com/hd/pages/201804video/dist/index.html' + to.fullPath;
//     }
//   }else{
//     window.configUrl = 'https://weixin.phoenix-resonance.com/hd/pages/201804video/dist/index.html' + to.fullPath;
//   }
// })

export default router
