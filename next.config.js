"use strict";

const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  webpack: (config, options) => {   

    config.optimization.minimizer = [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({})
    ];

    return config
  }
}