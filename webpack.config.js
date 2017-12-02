'use strict';
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: [
        path.join(__dirname, 'bin/www')
    ],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    output: {
        path: path.join(__dirname),
        filename: 'app.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: true,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: [/node_modules/],
            loader: 'babel-loader',
            query: {
                "presets": ["env"]
            }
        }]
    }
};