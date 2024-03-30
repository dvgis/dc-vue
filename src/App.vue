<template>
  <div id="app">
    <div id="viewer-container" class="viewer-container"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    initViewer() {
      new DC.Viewer('viewer-container')
    },
  },
  mounted() {
    this.$nextTick(() => {
      DC.ready().then(this.initViewer)
    })
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.viewer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
