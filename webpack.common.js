const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//获取html-wepack-plugin参数的方法
const getHtmlConfig = function (name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: name + '.html',
        favicon: './ic_logo.png',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};

module.exports = {
    entry: {
        'common': ['./src/page/common/index.js'],
        // 首页
        'index': ['./src/page/index/index.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    externals: {

    },
    module: {
        rules: [{
            test: /\.css$/,
            include: path.resolve(__dirname, "src"),
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, "src"),
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                }, {
                    loader: "sass-loader",
                }],
            })
        }, {
            test: /\.(gif|png|jpg|woff|svg|eot|ttf|otf)\??.*$/,
            include: path.resolve(__dirname, "src"),
            use: ['url-loader?limit=100&name=resource/[name].[ext]']
        }, {
            test: /\.string$/,
            include: path.resolve(__dirname, "src/page"),
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeAttributQuotes: false
                }
            }]
        }, {
            test: /\.js$/,
            include: path.resolve(__dirname, "src")
        }]
    },
    resolve: {
        alias: {
            node_modules: __dirname + '/src/node_modules',
            lib: __dirname + '/src/lib',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',
            fonts: __dirname + '/src/fonts',
            class: __dirname + '/src/class',
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        // 删除编译前的dist
        new CleanWebpackPlugin(['dist']),
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html单独打包
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    ]
}