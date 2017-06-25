var webpack = require("webpack"),
  autoprefixer = require("autoprefixer"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  // caseSensitivePathsWebpackPlugin = require("case-sensitive-paths-webpack-plugin"),
  // ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
  // CopyWebpackPlugin = require('copy-webpack-plugin'),
  _ = require("lodash"),
  path = require("path"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  env = _.trim(process.env.NODE_ENV);

console.log(
  "=============================" + env + "============================="
);
console.log(
  "=============================" + __dirname + "============================="
);

let rootPath = path.resolve(__dirname, "../");

var webpackConfig = {
  devtool: "cheap-module-source-map", //generate source map for developing
  entry: {
    // app: path.join(rootPath, "src/index.js")
    app: ["babel-polyfill", path.join(rootPath, "src/index.js")]
    // vendor: []
  },

  output: {
    // publicPath: __dirname + "/public",
    path: rootPath + "/dist", //the path saving packed file
    // filename: "bundle[hash].js" //the out put file name
    filename: "bundle.js"
  },

  resolve: {
    extensions: [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ".js",
      ".json",
      ".jsx",
      ".ts",
      "tsx",
      ""
    ],
    alias: {}
  },
  // resolveLoader: {
  //   root: ["node_modules"],
  //   moduleTemplates: ["*-loader"]
  // },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.css$/,
        // include: paths.appNodeModules,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.svg$/,
        loader: "file",
        query: {
          name: "static/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: "file"
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.join(__dirname, "/../public/index.html") //packed js append to index.html,set index.html path
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new caseSensitivePathsWebpackPlugin()
  ]
};

console.log(path.join(__dirname, "/../public/index.html"));

module.exports = webpackConfig;
