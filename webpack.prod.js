const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        publicPath: '../'
    },
    devtool: false,
    plugins: [
        // uglifyJs压缩
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: true,
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: {
                    drop_debugger: true, // debugger
                    drop_console: true // console
                },
                warnings: false,
            }
        })
    ]
});