/**
 * @Author: Caven
 * @Date: 2021-07-01 20:57:37
 */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

class UiLoader {
  load() {
    Vue.use(ElementUI)
  }
}

export default UiLoader
