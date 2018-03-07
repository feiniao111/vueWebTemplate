'use strict'
// Template version: {{ template_version }}
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const devenv= require('./dev.env')
const mockenv = require('./mock.env')

module.exports = {
  dev: {
    env: devenv,
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/index.php': {
        target: devenv.TARGETSERVER + devenv.TARGETWEBROOT,
        changeOrigin: true,
        pathRewrite: {},
        onProxyRes:function (proxyRes, req, res) {
          delete proxyRes.headers['location'];       // remove header from response
          proxyRes.headers['location'] = devenv.LOACALSERVER+'/index.html';     // add new header to response
        }
      },
      '/rj': { // 也可能是rj_u,根据项目来
        target: devenv.TARGETSERVER,
        changeOrigin: true,
        pathRewrite: {},
        cookieDomainRewrite: {
          // "127.0.0.1:8081":"172.21.116.201:9001",
          // "127.0.0.1:8081":"127.0.0.1:9001",
          "127.0.0.1:8081":"172.21.149.139:9001",
        },
        onProxyRes:function (proxyRes, req, res) {
          delete proxyRes.headers['location'];       // remove header from response
          proxyRes.headers['location'] = devenv.LOACALSERVER+'/index.html';     // add new header to response
        }
      },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    {{#lint}}// Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    {{/lint}}

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    env: require('./prod.env'),
    // Template for index.html
    index: path.resolve(__dirname, '../../webapp/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../webapp'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/rj/webapp/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  mock: {
    env: mockenv,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/index.php': {
        target: mockenv.TARGETSERVER + mockenv.TARGETWEBROOT,
            changeOrigin: true,
            pathRewrite: {},
        onProxyRes:function (proxyRes, req, res) {
          delete proxyRes.headers['location'];       // remove header from response
          proxyRes.headers['location'] = mockenv.LOACALSERVER+'/index.html';     // add new header to response
        }
      },
      '/rj': {
        target: mockenv.TARGETSERVER,
        changeOrigin: true,
        pathRewrite: {},
        cookieDomainRewrite: {
          // "127.0.0.1:8081":"127.0.0.1:9001",
          "127.0.0.1:8081":"172.21.149.139:9001",
          // "127.0.0.1:8081":"172.21.116.201:9001",
        },
        onProxyRes:function (proxyRes, req, res) {
          delete proxyRes.headers['location'];       // remove header from response
          proxyRes.headers['location'] = mockenv.LOACALSERVER+'/index.html';     // add new header to response
        }
      }
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    {{#lint}}// Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,
    {{/lint}}

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  }
}
