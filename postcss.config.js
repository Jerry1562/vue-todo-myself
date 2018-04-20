//当stylus文件被转换成CSS文件后，通过postcss对代码进行优化
//在优化的过程中使用一系列的组件进行优化，下面使用的就是autoprefixer
//此组件的作用就是为样式加上浏览器前缀
const autoprefixer = require('autoprefixer');
  
module.exports = {
    plugins:[
        autoprefixer()
    ]
}