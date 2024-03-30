'use strict'
const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

let resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dc-vue' : '/',
  productionSourceMap: false,
  configureWebpack: {
    module: {
      unknownContextCritical: false,
    },
    performance: {
      hints: false,
    },
  },
  chainWebpack: (config) => {
    config.resolve.extensions.add('.js').add('.cjs').add('.vue').end()
    config.plugin('copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
            to: path.join(__dirname, 'dist', 'libs/dc-sdk/resources'),
          },
        ],
      },
    ])
  },
}
