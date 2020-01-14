module.exports = {
  // 1.反向代理配置
  devServer: {
    proxy: {
      '/app': {
        // target: 'http://106.52.104.153:8281', // 外网IP切换
        target: "http://127.0.0.1:9090", // 内网IP切换
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/app': ''
        }
      }
    }
  },
  // 2.资源公共路径设置
  publicPath: process.env.NODE_ENV === 'production' ? '/dist' : './'
}
