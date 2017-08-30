import Vue from 'vue'
import App from './App.vue'

import LvInput from './componentes/LvInput.vue'
Vue.component('lv-input', LvInput)
import router from './rotas'

import store from './vuex'

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})