<template>
  <div class="index">
    <dc-viewer
      viewer-id="viewer-container"
      @on-viewer-created="viewerCreatedHandler"
    >
      <dc-base-layer
        layer-type="amap"
        :options="{ style: 'img', crs: 'WGS84' }"
      ></dc-base-layer>
    </dc-viewer>
  </div>
</template>

<script>
import ViewerApi from '@/api/ViewerApi'
export default {
  name: 'Index',
  components: {},
  methods: {
    viewerCreatedHandler(viewer) {
      global.viewerApi = new ViewerApi(viewer)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
