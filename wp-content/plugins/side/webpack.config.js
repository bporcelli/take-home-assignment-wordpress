const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const webpack = require('webpack');

module.exports = (env, argv) => {
    const mode = argv.mode || 'development';

    return {
        context: __dirname,
        entry: {
            'editor': './src/index.js',
            'front': './src/front.js',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js'
        },
        externals: {
            jquery: 'jQuery',
        },
        devtool: mode === 'development' ? 'eval-source-map' : false,
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'eslint-loader',
                            options: {
                                fix: true,
                                emitWarning: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.(otf|woff(2)?|ttf|eot)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name]-[hash:8].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.(svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name].[ext]',
                            },
                        }
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            new DependencyExtractionWebpackPlugin()
        ]
    };
};