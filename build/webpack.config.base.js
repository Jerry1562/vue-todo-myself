const path = require('path');

const config = {
    mode : process.env.NODE_ENV || 'production',
    target:'web',
    entry:path.join(__dirname,'../client/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'../dist'),
        //publicPath:'/base/'  
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,//使用babel-loader处理.jsx文件
                loader:'babel-loader'//babel-loader中preset预设使用了env 
            },                       //用plugin加载了transform-vue-jsx插件
                                      
            {                       
                 test:/\.js$/,                        
                 loader:'babel-loader',
                 exclude:/node_modules/
            },                          
            {
                test:/\.(gif|jpg|jpeg|png|svg|)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }

                    }
                ]
            }
       ]
    }
}


module.exports=config;
