/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

import DC from '@dvgis/dc-sdk/dist/dc.base.min'
import DcCore from '@dvgis/dc-sdk/dist/dc.core.min'
import '@dvgis/dc-sdk/dist/dc.core.min.css'

class DcLoader {
  load() {
    global.DC = DC
    DC.use(DcCore)
  }
}

export default DcLoader
