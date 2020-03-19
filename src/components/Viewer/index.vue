<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>

<script>
export default {
  name: 'Viewer',
  data() {
    return {}
  },
  methods: {
    initViewer() {
      let viewer = new Cesium.Viewer('viewer-container', {
        animation: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        selectionIndicator: false,
        timeline: false,
        infoBox: false
      })
      viewer.cesiumWidget._creditContainer.style.display = 'none'
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      )
      viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40489014.0
      viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT
      this.$emit('on-viewer-completed', viewer)
    }
  },
  mounted() {
    this.initViewer()
  }
}
</script>

<style lang="scss" scoped>
.viewer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
