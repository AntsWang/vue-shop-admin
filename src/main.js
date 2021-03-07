import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/global.css'
import './assets/iconfont/iconfont.css'

import apis from './http/api';
import { getVM } from './http/axios'

Vue.config.productionTip = false
Vue.prototype.$apis = apis
const vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

getVM(vm);
