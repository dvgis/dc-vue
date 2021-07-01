/**
 * @Author: Caven
 * @Date: 2019-10-12 19:50:10
 */

import axios from 'axios'

const instance = axios.create({
  timeout: 15000
})

class HttpLoader {
  load() {
    Vue.use({
      install(Vue, options) {
        Vue.prototype.$http = instance
      }
    })
    global.Http = instance
    Object.freeze(global.Http)
    initInterceptors(instance)
  }
}

function initInterceptors(instance) {
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )
}

export default HttpLoader
