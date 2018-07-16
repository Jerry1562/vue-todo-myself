//类库打包要使用chunkhash,打包css使用的是contenthash
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const merge = require('webpack-merge');//merge插件可以方便我们制作各样的配置文件，毕竟他们相互依赖


const webpack = require('webpack');

const baseConfig =require('./webpack.config.base')//引入base配置文件

const VueServerPlugin = require('vue-server-renderer/server-plugin')

let config

    config = merge(baseConfig,{
        target:'node',
        entry:path.join(__dirname,'../client/server_entry.js'),
        devtool:'source-map',
        output:{
            libraryTarget:'commonjs2',
            filename:'server_entry.js',
            path:path.join(__dirname,'../server-build')
        },
        externals:Object.keys(require('../package.json').dependencies),//使用选项中的包却不把他们打包进输出文件内，选项放置在数组内
        module:{
            rules:[
                {
                    test: /\.styl/,
                    //use: ExtractPlugin.extract({
                      //fallback: 'style-loader',
                      use: [
                        MiniCssExtractPlugin.loader, //使用了新的插件
                        'css-loader',
                        {
                          loader: 'postcss-loader',
                          options: {
                            sourceMap: true,
                          }
                        },
                        'stylus-loader'
                      ]
                   // })
                }
            ]
        },
        plugins:[
            new MiniCssExtractPlugin({
                chunkFilename:'style.[contenthash:8].css'
            }),
            new webpack.DefinePlugin({
                'process.env,NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'development'),
                'process.env.VUE_ENV':'""server'
            }),
            new VueServerPlugin()
        ]
    })



module.exports=config;
