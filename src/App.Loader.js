/**
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 */

import Vue from 'vue'
import DC from '@dvgis/dc-sdk/dist/dc.base.min'
import DcCore from '@dvgis/dc-sdk/dist/dc.core.min'
import DcUI from '@dvgis/dc-ui/dist/dc.ui.min'
import '@dvgis/dc-sdk/dist/dc.core.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const hub = new Vue()

class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    DC.use(DcCore)
    Vue.use(ElementUI)
    Vue.use(DcUI)
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }

  install() {
    global.Vue = Vue
    global.DC = DC
    return Promise.all([
      import('@/components'),
      import('@/loader/HttpLoader'),
      import('@/loader/ConfigLoader')
    ])
  }
}

const appLoader = new AppLoader()
export default appLoader
