const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      "/api": {
         target: 'http://localhost:9000/',
         pathRewrite: {'^/': ''},
         changeOrigin: true

      }
    },
    port : 8080
  },
})
