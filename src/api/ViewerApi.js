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

  addBaseLayer() {
    let baidu = DC.ImageryLayerFactory.createAmapImageryLayer({
      style: 'img'
    })
    this._viewer.addBaseLayer(baidu)
    return this
  }
}

export default ViewerApi
