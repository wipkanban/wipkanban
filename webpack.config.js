const path = require('path');

module.exports = {
    mode:"development",
    entry: './src/client/index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'es2017', 'react', 'stage-2']
                }
            }
        ]
    }
}
