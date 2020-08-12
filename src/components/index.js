/**
 * @Author: Caven
 * @Date: 2020-03-19 22:17:28
 */

const componentsWatcher = scanner => {
  scanner.keys().map(key => {
    let name = scanner(key).default.name
    if (name) {
      Vue.component(name, function(resolve) {
        require([key + ''], resolve)
      })
    }
  })
}
const vueScanner = require.context(
  '@/components',
  true,
  /^\.\/((?!\/)[\s\S])+\/index\.vue$/
)
componentsWatcher(vueScanner)

const svgWatcher = scanner => scanner.keys().map(scanner)
const svgScanner = require.context('@/assets/svg/icons', false, /\.svg$/)
svgWatcher(svgScanner)
