import Todo from '../views/todo/todo.vue'
//import Login from '../views/login/login.vue'

export default [
     {
        path:'/',
        redirect:'/login'
    },//页面加载时默认路由跳转路径 
    {
        path:'/app',
        /* props:true,
        props:{id:'456'}, */
        /* props:(route)=>({id:route.query}), *///路由的参数传递，没有被注释的方法耦合度最低，最推荐，路由向组件传递参数
        //创建一个函数返回一个对象给props，传入参数route为路由对象，query为查询字符串对象，数据以键值对的形式储存在里面
        component:Todo,
        /* name:'app', *///name的使用，在router-link上使用
        meta:{
            titel:'',
            description:''
        },//在守卫导航一节细讲，利用router对象.mate.title这样的方式可以拿到mate中的数据
        //一些与路由配置无关的参数应该写在里面，避免被vue忽视
        /* children:[//嵌套路由，里面是一些子路由,通过在路径后添加'/子路由路径'访问
            {
            path:'test',
            component:Login
            }
       ] */
    },
    {
        path:'/login',
        props:{
            /* default:(router)=>({id:router.query}), */
            /* a:(route)=>({id:route.query}) */
        },//使用命名视图的时候，必须为每个视图都传入一个props
        //route指向的是当前的route对象，每更换一个路由，route对象都会发生改变
        components:{
            default:()=>import('../views/login/login.vue'),//懒加载行为，所谓的懒加载在使用此链接的时候才进行的加载
            /* a:Todo */
        },
          /* beforeEnter:(to,from,next)=>{
            console.log('before routes enter')
            next() 
        }*/
    } ,
    /* {
        path:'/login/first',
        component:()=>import('../views/login/login.vue')
    } */
]