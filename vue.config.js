const { defineConfig } = require('@vue/cli-service')
const pageName = 'neiromaining'

const outputDir = pageName
const publicPath = process.env.NODE_ENV === 'production'
  ? `/recieve/2024/${pageName}`
  : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath,
  outputDir,
  devServer: {
    host: 'localhost'
  }
})
