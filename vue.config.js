module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.52.104.153:8281', // 外网IP切换
        // target: "http://127.0.0.1:9090", 内网IP切换
        changeOrigin: true,
        pathRewrite: {
          '/api/': '/'
        }
      }
    }
  }
}
