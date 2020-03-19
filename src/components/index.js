/*
 * @Author: Caven
 * @Date: 2020-03-19 22:17:28
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-19 22:22:06
 */

const componentsWatcher = scaner => {
  scaner.keys().map(key => {
    let name = scaner(key).default.name
    if (name) {
      Vue.component(name, function(resolve) {
        require([key + ''], resolve)
      })
    }
  })
}
const vueScaner = require.context(
  '@/components',
  true,
  /^\.\/((?!\/)[\s\S])+\/index\.vue$/
)
componentsWatcher(vueScaner)
