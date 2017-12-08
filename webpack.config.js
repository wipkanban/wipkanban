const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({template: './public/index.html'});

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'es2017', 'react', 'stage-2']
                }
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}