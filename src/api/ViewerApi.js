/**
 * @Author: Caven
 * @Date: 2020-05-07 19:28:33
 */

class ViewerApi {
  constructor(viewer) {
    this._viewer = viewer
  }

  get viewer() {
    return this._viewer
  }
}

export default ViewerApi
