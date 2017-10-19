const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config.js");
const express = require("express");

const app = express();

function handleCompiler(err, stats) {
  if (err || stats.hasErrors() || stats.hasWarnings()) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

let compiler = webpack(webpackConfig);
let middleware = webpackMiddleware(compiler, {
  contentBase: path.resolve(__dirname, "../src/"), //webpack server read file path
  // colors: true, //terminal shows log with color
  // historyApiFallback: true, //
  // inline: true, //
  // hot: true,
  // progress: true,
  // compress: true,
  // host: "0.0.0.0",
  // disableHostCheck: true,
  // port: "3000"
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

// devServer.listen(3000, err => {
//   if (err) {
//     console.log(err);
//   }

//   console.log("start dev server");
// });
app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get("*", function response(req, res) {
  res.sendFile(path.resolve(__dirname, "../", "index.html"));
  // res.end();
});
const port = 3000;
app.listen(port, "0.0.0.0", function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(
    "==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.",
    port,
    port
  );
});
