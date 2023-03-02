const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false},
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                'src/style/vars.scss',  /*делает переменные глобально доступными*/
                                'src/style/mixins.scss'
                            ]
                        }
                    }
                ],
                
            },

            {
                test: /\.(png||svg||jpg||jpeg||gif||mp3||wav)$/i,
                type: 'asset/resource'
            },


        ]
    },
    plugins: [
        new htmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'), 
    }),
    ],
}