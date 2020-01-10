module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // target: "http://106.52.104.153:8281",
        target: "http://127.0.0.1:9090",
        changeOrigin: true,
        pathRewrite: {
          "/api/": "/"
        }
      }
    }
  }
}