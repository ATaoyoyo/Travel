// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import vueawesomeswiper from 'vue-awesome-swiper'

import 'styles/reset.css'
import 'styles/border.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(vueawesomeswiper)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
