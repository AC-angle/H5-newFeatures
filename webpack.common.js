const iCrushLoaderPlugin = require('icrush-loader-plug');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.iCrush$/,
            exclude: /node_modules/,
            loader: ['icrush-loader']
        }, {
            test: /\.css$/,
            loader: ['icrush-style-loader', 'css-loader']
        }]
    },
    plugins: [
        new iCrushLoaderPlugin()
    ]
};