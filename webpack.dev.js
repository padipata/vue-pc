const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path=require('path')

module.exports = merge(common, {
	output: {
        path: path.resolve(__dirname, './dist'),
    },
	devtool: 'inline-source-map',
	devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
	},
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});