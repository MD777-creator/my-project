import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import toast from "./components/common/toast/index"
import FastClick from "fastclick"

FastClick.attach(document.body)

Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
