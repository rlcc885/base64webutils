const path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/base64webutils/',
  outputDir: path.resolve(__dirname, "./docs"),
})
