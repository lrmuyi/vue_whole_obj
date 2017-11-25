// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import VueResource from 'vue-resource'
import $ from 'jquery'

import './assets/bt/css/bootstrap.min.css'
// import './assets/bt/css/bootstrap-combined.css'

import '../static/base.css'

import qs from 'qs';
axios.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data);
    return config;
}, function(error) {
    return Promise.reject(error);
});
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
// Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
