const path = require('path')
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withImages = require('next-images')
const plugins = [withOffline, withBundleAnalyzer, withImages, withCSS, withSass]

module.exports = withPlugins(plugins, {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/fa': { page: '/fa' }
    }
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  }
})
