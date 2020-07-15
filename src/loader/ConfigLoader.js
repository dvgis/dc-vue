/*
 * @Author: Caven
 * @Date: 2019-10-12 12:48:10
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-15 18:12:36
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
