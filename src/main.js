import Vue from 'vue'
import App from './App.vue'
import * as DC from '@dvgis/dc-sdk'
import '@dvgis/dc-sdk/dist/dc.min.css'
Vue.config.productionTip = false

global.DC = DC

new Vue({
  render: (h) => h(App),
}).$mount('#app')
