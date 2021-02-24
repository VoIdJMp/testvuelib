import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'

import InputFormats from 'vue-formats'

Vue.use(InputFormats)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
