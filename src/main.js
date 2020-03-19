/*
 * @Author: Caven
 * @Date: 2020-03-19 22:35:48
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-19 22:48:03
 */
import appLoader from './App.Loader'
;(async () => {
  await appLoader.install()
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
