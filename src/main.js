import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import toast from "./components/common/toast/index"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
})

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
