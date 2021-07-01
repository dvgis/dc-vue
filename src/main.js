/**
 * @Author: Caven
 * @Date: 2020-03-19 22:35:48
 */

import Vue from 'vue'
import axios from 'axios'
import { DcLoader, HttpLoader, UiLoader } from './loader'
;(async () => {
  const hub = new Vue()
  Vue.config.productionTip = false
  global.Vue = Vue
  Vue.prototype.$hub = hub

  await axios.get('config/config.json').then(res => {
    global.Config = res.data
  })

  await new Promise(resolve => {
    new DcLoader().load()
    new HttpLoader().load()
    new UiLoader().load()
    import('@/components')
    resolve()
  })

  Promise.all([
    import('./App.vue'),
    import('./router'),
    import('./store')
  ]).then(([{ default: App }, { default: router }, { default: store }]) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  })
})()
