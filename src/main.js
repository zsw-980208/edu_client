// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"
import axios from "axios"
Vue.prototype.$axios = axios;

import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import "../static/js/gt"
Vue.use(Element);

// vue-video-player
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer);


import "../static/css/global.css"
Vue.config.productionTip = false

// 时间格式化
import moment from 'moment/moment'

Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format(formatString); // value可以是普通日期 20170723
    //return moment.unix(value).format(formatString); // 这是时间戳转时间
})


new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  template: '<App/>'
})
