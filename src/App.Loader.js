/*
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-14 11:42:46
 */
import Vue from 'vue'
import 'dvgis/dc-sdk/dist/dc.base.min'
import 'dvgis/dc-sdk/dist/dc.core.min'
import 'dvgis/dc-plugins/dist/dc.plugins.min'
import 'dvgis/dc-sdk/dist/dc.core.min.css'

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
    return Promise.all([import('@/components'), import('@/loader/HttpLoader')])
  }
}

const appLoader = new AppLoader()
export default appLoader
