<template>
  <div class="index">
    <viewer @on-viewer-completed="viewerCompletedHandler"></viewer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  methods: {
    viewerCompletedHandler(viewer) {
      global.viewer = viewer
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
