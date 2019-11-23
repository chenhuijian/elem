import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fly from 'flyio'
Vue.prototype.$http = Fly
import '@/common/style/index.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

