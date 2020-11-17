const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "style.css"
        })

    ],
    devServer: {
        contentBase: './dist'
    }
};