module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://time-frequency-be.dev.xuxusheng.com:88",
        changeOrigin: true,
      },
    },
  },
};
