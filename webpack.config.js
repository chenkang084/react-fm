var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    // ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    // CopyWebpackPlugin = require('copy-webpack-plugin'),
    _ = require('lodash'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    env = _.trim(process.env.NODE_ENV);

console.log("=============================" + env + "=============================");
console.log("=============================" + __dirname + "=============================");

var webpackConfig = {
    devtool: 'cheap-module-source-map', //generate source map for developing
    entry: {
        app: __dirname + "/src/js/index.js", //the main file for start app
        vendor: [],
    },

    output: {
        // publicPath: __dirname + "/public",
        path: __dirname + "/dist", //the path saving packed file
        // filename: "bundle[hash].js" //the out put file name
        filename: "bundle.js"
    },
    // devServer: {
    //     contentBase: "./public", //webpack server read file path
    //     colors: true, //terminal shows log with color
    //     historyApiFallback: true, //
    //     inline: true, //
    //     hot: true,
    //     progress: true,
    //     compress: true
    // },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        alias: {}
    },
    module: { //
        noParse: [
            /moment-with-locales/
        ],

        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader']),
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'file'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=/[name].[hash:8].[ext]'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            }
        ]
    },

    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: __dirname + "/src/html/index.html" //packed js append to index.html,set index.html path
        }),
        new webpack.DefinePlugin({
            'process.env': "'" + env + "'",
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js"),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        // new ngAnnotatePlugin({ add: true }),

        // new webpack.DllReferencePlugin({
        //     context: __dirname + "",
        //     manifest: require('./app/assets/dll/vendor-manifest.json')
        // }),

        // new CopyWebpackPlugin([{
        //     from: './app/assets',
        //     to: 'assets'
        // }]),

        new ExtractTextPlugin('style.css', {
            allChunks: true,
        }),

    ],

}

if (env == 'prod') {
    console.log("=============================start uglify=============================");
    webpackConfig.plugins = webpackConfig.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = webpackConfig;