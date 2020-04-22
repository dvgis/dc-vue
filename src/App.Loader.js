/*
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-04-22 14:18:07
 */
import Vue from 'vue'

import 'dc/dc.core.min'
// import 'dc/plugins/dc.plugins.min'
import 'dc/dc.core.min.css'

const hub = new Vue()
class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }

  install() {
    global.Vue = Vue

    return Promise.all([import('@/components')])
  }
}

const appLoader = new AppLoader()
export default appLoader
