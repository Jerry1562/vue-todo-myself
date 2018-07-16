import Router from 'vue-router'
import routes from './routes'

export default ()=>{
    return new Router({
        routes:routes,//定义路由各个跳转路径
        mode:'history',//历史模式，美化hash路由,使URL更好看，hash路由不能被搜索引擎所解析，需要浏览器及服务器支持
        //base:'/base/',//作为应用的基路径
        linkActiveClass:'link-active-class',
        linkExactActiveClass:'link-exact-active-class',//这两项用于配置router-link标签的class属性，只在标签被激活的情况下才会添加上去
        fallback:true,//true为默认的处理模式，当不支持历史模式时，自动退回到hash模式。如果设置为false，单页应用变成多页应用，每次跳转都是后端返回一个新的页面
        scrollBehavior(to,from,savedPosition){
            if(savedPosition){
                return savedPosition
            }else{
                return{
                    x:0,
                    y:0
                }
            }
        },//这是一个处理滚动条位置的函数，第一个参数为目的路由，第二个参数是来源路由，第三个参数是历史滚动条位置，前两个都是完整的路由对象
        //parseQuery(query){},//拿到url的查询参数部分并转换为json对象
        //stringifyQuery(){}//拿到json对象并转换成一个URL的查询字符串
        //这两个方法主要是用来编写私人定制的，查询字符串与json对象的转换方法，在router中需要进行转换的时候会自动调用

    
    })
}
//此写法用于降低缓存，避免内存溢出，此原理在服务端渲染一节详细讲
//对于linkActiveClass与linkExactActiveClass的区别，当有标签的连接是包含子域的时候，被激活时，他的子域的class会被添加上linkActiveClass的内容，他自己则两个都有
//在例子中，点击/login/first,其class为两个都有，/login中class为link-active-class
//刷新空白的问题无法解决