const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const webpack = require('webpack');

const ExtractPlugin = require('extract-text-webpack-plugin');

const config = {
    mode : process.env.NODE_ENV || 'production',
    target:'web',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'//使用babel-loader处理.jsx文件
            },                       //babel-loader中preset预设使用了env 
                                   //用plugin加载了transform-vue-jsx插件   
           
            {
                test:/\.(gif|jpg|jpeg|png|svg|)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'resources/[path].[name].[hash:8].[ext]'
                        }

                    }
                ]
            }

    ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
};
if(isDev){
    config.module.rules.push({
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
    })
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port:8080,
        host:'127.0.0.1',
        overlay:{
            errors:true
        },
        //historyFallback:{},
        hot:true
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(), 
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
      }
      config.output.filename = '[name].[chunkhash:8].js'
      config.module.rules.push(
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                }
              },
              'stylus-loader'
            ]
          })
        },
      )
      config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime'
        })
      )
}

module.exports=config;
