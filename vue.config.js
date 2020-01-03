module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://106.52.104.153:8281",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
}