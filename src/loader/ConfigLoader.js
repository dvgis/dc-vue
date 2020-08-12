/**
 * @Author: Caven
 * @Date: 2019-10-12 19:48:10
 */

class ConfigLoader {
  load() {
    global.Http.get('config/config.json')
      .then(res => {
        global.Config = res.data
        Promise.resolve()
      })
      .catch(e => {
        Promise.reject(e)
      })
  }
}

const configLoader = new ConfigLoader()
export default configLoader
