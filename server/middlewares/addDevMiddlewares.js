const path = require('path');
const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const util = require('util');
const { createFsFromVolume, Volume } = require('memfs');
const fs = createFsFromVolume(new Volume());
// function createWebpackMiddleware(compiler, publicPath) {
//   return webpackDevMiddleware(compiler, {
//     // logLevel: 'warn',
//     publicPath,
//     // silent: true,
//     // stats: 'errors-only',
//   });
// }
fs.join = path.join.bind(path);
const readFile = util.promisify(fs.readFile);
function createWebpackMiddleware(compiler, publicPath) {
  return require('webpack-dev-middleware')(compiler, {
    publicPath,
    outputFileSystem: fs,
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  try {
    const compiler = webpack(webpackConfig);
    const middleware = createWebpackMiddleware(
      compiler,
      webpackConfig.output.publicPath,
    );
    // createWebpackMiddleware(
    //   compiler,
    //   webpackConfig.output.publicPath,
    //   { noInfo: true },
    // );

    app.use(middleware);
    app.use(
      webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
      }),
    );

    app.get('*', async (req, res) => {
      await readFile(
        path.join(compiler.outputPath, 'index.html'),
        (err, file) => {
          if (err) {
            res.sendStatus(404);
          } else {
            res.send(file.toString());
          }
        },
      );
    });
  } catch (error) {
    console.log('addDevMiddlewares =>>> err: ', error);
  }
};
