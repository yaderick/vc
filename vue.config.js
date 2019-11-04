module.exports = {
  devServer: {
    port: 9000,
    overlay: {
      warnings: false,
      errors: true,
    },
    open: 'Google Chrome',
  },
  lintOnSave: false,
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
};
