//类库打包要使用chunkhash,打包css使用的是contenthash
const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');//自动生成入口的HTML文件

const merge = require('webpack-merge')//merge插件可以方便我们制作各样的配置文件，毕竟他们相互依赖


const webpack = require('webpack');

const baseConfig =require('./webpack.config.base')//引入base配置文件


const defaultPlugins=[
    new webpack.DefinePlugin({
    'process.env':{
        NODE_ENV:  '"development"'
         }
     }),
    new HTMLPlugin({
        template:path.join(__dirname,'template.html')//加载模板template.html,生成新的HTML文件时就会套用新的模板
    })
]

const devServer = {
    port:8080,
    host:'127.0.0.1',
    overlay:{
        errors:true
    },
    //historyFallback:{},
    hot:true
};//把devserver配置项放到外面便于下面的目录修改
 
let config

    config = merge(baseConfig,{
        entry:path.join(__dirname,'../practice/index.js'),
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
        resolve:{
            alias:{
                //import Vue from 'vue'中的vue实际上由此代码指定，默认为vue.runtime系列
                'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js'),
                //runtime系列中省略了对vue对象中templete代码的处理模块，会报错
                //因此此处指定vue.esm.js就是为了避免这种情况
            }
        },
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(), 
            //new webpack.NoEmitOnErrorsPlugin()
        ])
    })



module.exports=config;
