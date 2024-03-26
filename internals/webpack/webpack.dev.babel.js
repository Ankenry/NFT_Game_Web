const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  mode: 'development',

  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // ['@babel/preset-env', { targets: 'defaults' }],
              [
                '@babel/preset-env',
                {
                  bugfixes: true,
                  targets: false
                    ? 'defaults, not ie 10-11'
                    : {
                        esmodules: true,
                      },
                },
              ],
              ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'app/index.html',
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'NODE_DEBUG',
      'BASE_URL',
      'BASE_URL_API',
      'X_USERNAME',
      'X_PASSWORD',
      'BASE_URL_CALL_LOCAL',
      'BASE_URL_LOGIN_BACK',
      // 'LINE_CLIENT_ID',
      // 'LINE_CLIENT_SECRET_KEY',
      // 'TWITTER_ID',
      // 'TWITTER_SECRET_ID',
      // // 'INFURA_API_KEY',
      // 'WALLET_CONNECT_PROJECT_ID',
      // 'TWITTER_ID',
      // 'TWITTER_SECRET_ID',
    ]),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js', '.json', '.ts', '.tsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  devtool: 'inline-source-map',
  target: 'web',
  performance: {
    hints: false,
  },
};
