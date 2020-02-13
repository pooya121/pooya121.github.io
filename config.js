return {
  externals: [null],
  optimization: {
    checkWasmTypes: false,
    nodeEnv: false,
    splitChunks: false,
    minimize: false,
    minimizer: [
      {
        cpus: 7,
        distDir: 'C:\\Users\\Pooya\\Desktop\\Resume\\.next',
        workerThreads: false,
        options: {
          sourceMap: false,
          cache: true,
          terserOptions: {
            parse: { ecma: 8 },
            compress: { ecma: 5, warnings: false, comparisons: false, inline: 2 },
            mangle: { safari10: true },
            output: { ecma: 5, safari10: true, comments: false, ascii_only: true }
          }
        }
      },
      {
        __next_css_remove: true,
        options: { postcssOptions: { map: { inline: false, annotation: false } } }
      }
    ]
  },
  recordsPath: 'C:\\Users\\Pooya\\Desktop\\Resume\\.next\\server\\records.json',
  context: 'C:\\Users\\Pooya\\Desktop\\Resume',
  output: {
    path: 'C:\\Users\\Pooya\\Desktop\\Resume\\.next\\server',
    libraryTarget: 'commonjs2',
    hotUpdateChunkFilename: 'static/webpack/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'static/webpack/[hash].hot-update.json',
    chunkFilename: '[name].[contenthash].js',
    strictModuleExceptionHandling: true,
    futureEmitAssets: true,
    webassemblyModuleFilename: 'static/wasm/[modulehash].wasm'
  },
  performance: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.jsx', '.json', '.wasm'],
    modules: ['node_modules'],
    alias: {
      'next/head': 'next/dist/next-server/lib/head.js',
      'next/router': 'next/dist/client/router.js',
      'next/config': 'next/dist/next-server/lib/runtime-config.js',
      'next/dynamic': 'next/dist/next-server/lib/dynamic.js',
      next: 'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next',
      'private-next-pages': 'C:\\Users\\Pooya\\Desktop\\Resume\\pages',
      'private-dot-next': 'C:\\Users\\Pooya\\Desktop\\Resume\\.next'
    },
    mainFields: ['main', 'module'],
    plugins: [{ topLevelLoader: {} }]
  },
  resolveLoader: {
    alias: {
      'emit-file-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\emit-file-loader',
      'error-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\error-loader',
      'next-babel-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-babel-loader',
      'next-client-pages-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-client-pages-loader',
      'next-data-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-data-loader',
      'next-serverless-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-serverless-loader',
      'noop-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\noop-loader',
      'next-plugin-loader':
        'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next\\dist\\build\\webpack\\loaders\\next-plugin-loader'
    },
    modules: ['node_modules'],
    plugins: [{ topLevelLoader: {} }]
  },
  module: {
    rules: [
      {
        test: {},
        include: ['C:\\Users\\Pooya\\Desktop\\Resume', {}, {}, {}, {}],
        use: {
          loader: 'next-babel-loader',
          options: {
            isServer: true,
            distDir: 'C:\\Users\\Pooya\\Desktop\\Resume\\.next',
            pagesDir: 'C:\\Users\\Pooya\\Desktop\\Resume\\pages',
            cwd: 'C:\\Users\\Pooya\\Desktop\\Resume',
            cache: true,
            babelPresetPlugins: [],
            hasModern: false,
            development: false
          }
        }
      },
      {
        oneOf: [
          { test: {}, loader: 'noop-loader', options: { __next_css_remove: true } },
          {
            test: {},
            issuer: { test: {} },
            use: {
              loader: 'error-loader',
              options: {
                reason:
                  'CSS \u001b[1mcannot\u001b[22m be imported within \u001b[36mpages/_document.js\u001b[39m. Please move global styles to \u001b[36mpages/_app.js\u001b[39m.'
              }
            }
          },
          {
            sideEffects: false,
            test: {},
            issuer: { include: ['C:\\Users\\Pooya\\Desktop\\Resume'], exclude: {} },
            use: [
              {
                loader: 'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  onlyLocals: true,
                  modules: { mode: 'pure' }
                }
              },
              {
                loader:
                  'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\postcss-loader\\src\\index.js',
                options: { ident: '__nextjs_postcss', plugins: [null, null], sourceMap: true }
              }
            ]
          },
          {
            test: [{}],
            use: {
              loader: 'error-loader',
              options: {
                reason:
                  'CSS Modules \u001b[1mcannot\u001b[22m be imported from within \u001b[1mnode_modules\u001b[22m.\nRead more: https://err.sh/next.js/css-modules-npm'
              }
            }
          },
          {
            test: [{}],
            use: 'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\ignore-loader\\index.js'
          },
          {
            test: [{}],
            issuer: { include: [{}] },
            use: {
              loader: 'error-loader',
              options: {
                reason:
                  'Global CSS \u001b[1mcannot\u001b[22m be imported from within \u001b[1mnode_modules\u001b[22m.\nRead more: https://err.sh/next.js/css-npm'
              }
            }
          },
          {
            test: [{}],
            use: {
              loader: 'error-loader',
              options: {
                reason:
                  'Global CSS \u001b[1mcannot\u001b[22m be imported from files other than your \u001b[1mCustom <App>\u001b[22m. Please move all global CSS imports to \u001b[36mpages\\_app.tsx\u001b[39m.\nRead more: https://err.sh/next.js/css-global'
              }
            }
          }
        ]
      },
      { test: {}, use: ['ignore-loader'] },
      { test: {}, use: ['ignore-loader'] },
      { test: {}, use: ['ignore-loader'] },
      {
        test: {},
        use: [
          {
            loader: 'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 8192,
              fallback:
                'C:\\Users\\Pooya\\Desktop\\Resume\\node_modules\\next-images\\node_modules\\file-loader\\dist\\cjs.js',
              publicPath: '/_next/static/images/',
              outputPath: '../static/images/',
              name: '[name]-[hash].[ext]',
              esModule: false
            }
          }
        ]
      }
    ],
    strictExportPresence: true
  },
  plugins: [
    {},
    {
      definitions: {
        'process.env.NODE_ENV': '"production"',
        'process.browser': 'false',
        'process.env.__NEXT_EXPORT_TRAILING_SLASH': 'false',
        'process.env.__NEXT_MODERN_BUILD': 'false',
        'process.env.__NEXT_GRANULAR_CHUNKS': 'true',
        'process.env.__NEXT_BUILD_INDICATOR': 'true',
        'process.env.__NEXT_PRERENDER_INDICATOR': 'true',
        'process.env.__NEXT_PLUGINS': 'false',
        'process.env.__NEXT_STRICT_MODE': 'false',
        'process.env.__NEXT_REACT_MODE': '"legacy"',
        'process.env.__NEXT_ROUTER_BASEPATH': '""',
        'global.GENTLY': 'false'
      }
    },
    { options: { context: null, hashFunction: 'md4', hashDigest: 'base64', hashDigestLength: 4 } },
    { options: {} },
    { serverless: false },
    { options: { outputPath: 'C:\\Users\\Pooya\\Desktop\\Resume\\.next\\server' } },
    {}
  ],
  mode: 'production',
  name: 'server',
  target: 'node',
  devtool: false
}
