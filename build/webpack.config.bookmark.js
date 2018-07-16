//类库打包要使用chunkhash,打包css使用的是contenthash
const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge')

const isDev = process.env.NODE_ENV === 'development';

const webpack = require('webpack');

const baseConfig =require('./webpack.config.base')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const defaultPlugins=[
    new webpack.DefinePlugin({
    'process.env':{
        NODE_ENV: isDev ? '"development"' : '"production"'
         }
     }),
    new HTMLPlugin({
        template:path.join(__dirname,'template.html')
    })
]

const devServer = {
    port:8080,
    host:'127.0.0.1',
    overlay:{
        errors:true
    },
    historyApiFallback:{
        index:'/index.html'
    },//使任意的跳转和404页面都会指向index.html，因为前端路由跳转会使用HTML5 history API进行hash的美化，需要服务器支持
    hot:true
};
 
let config

if(isDev){
    config = merge(baseConfig,{
        entry:path.join(__dirname,'../bookCollection/index.js'),
        devtool:'#cheap-module-eval-source-map',
        module:{
            rules:[
                {
                    test:/\.styl$/,
                    use:[
                        'style-loader',
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options:{
                                sourceMap:true     //使用由上一级stylus-loader生成的sourceMap
                            }                      //无需自己再次生成，提高执行效率
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(), 
            //new webpack.NoEmitOnErrorsPlugin()
        ])
    })

}else{
    config = merge(baseConfig,{
        entry:{
            app: path.join(__dirname, '../bookCollection/index.js'),
            //vendor: ['vue']
          },
          output:{
              filename:'[name].[chunkhash:8].js'
            },
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
        optimization:{
            splitChunks:{
                chunks:'all'//替代commomsChunkPlugin进行webpack的类库打包
            },
            runtimeChunk : true
        },
        plugins:defaultPlugins.concat([
            new MiniCssExtractPlugin({
                chunkFilename:'style.[contenthash:8].css'
            })
            //new ExtractPlugin('styles.[chunkhash:8].css'),
            //new webpack.optimize.CommonsChunkPlugin({
              //name: 'vendor'
            //}),
            //new webpack.optimize.CommonsChunkPlugin({
              //name: 'runtime'
            //})
        ])
    }
) 
}

module.exports=config;
