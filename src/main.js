import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store'

import './config/rem'
import './assets/iconfont/iconfont.css'
import 'vant/lib/index'
// import 'swiper/css/swiper.css'



Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper)
Vue.use(Vant)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
