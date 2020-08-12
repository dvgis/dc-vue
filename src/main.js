/**
 * @Author: Caven
 * @Date: 2020-03-19 22:35:48
 */

import appLoader from './App.Loader'
;(async () => {
  let loaders = await appLoader.install()
  for (let i = 0; i < loaders.length; i++) {
    let loader = loaders[i].default
    if (!loader || !loader.load) continue
    await loader.load()
  }

  Promise.all([
    import('./App.vue'),
    import('./router'),
    import('./store')
  ]).then(([{ default: App }, { default: router }, { default: store }]) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  })
})()
