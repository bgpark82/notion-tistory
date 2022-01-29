const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        popup: "./src/popup/index.js",
        content: "./src/content/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            template: "./src/popup/index.html",
            filename: "popup.html",
            chunks: ["popup"],
            minify: false,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./src/manifest.json"}
            ]
        })
    ]
}
