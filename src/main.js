// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import {currency} from './currency'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('currency', currency)
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
})
