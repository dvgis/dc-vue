/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

import * as DC from '@dvgis/dc-sdk'
import '@dvgis/dc-sdk/dist/dc.min.css'

class DcLoader {
  load() {
    global.DC = DC
  }
}

export default DcLoader
