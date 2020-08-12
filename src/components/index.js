/**
 * @Author: Caven
 * @Date: 2020-03-19 22:17:28
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

const svgWatcher = scaner => scaner.keys().map(scaner)
const svgScaner = require.context('@/assets/svg/icons', false, /\.svg$/)
svgWatcher(svgScaner)
