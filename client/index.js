import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.styl'

/* import creatStore from './store/store' */
import creatRouter from './config/router.js'
import vueRouter from 'vue-router'
/* import Vuex from 'vuex' */


Vue.use(vueRouter)//vue引用插件的方法，利用这个插件的功能使每个子组件都能引用到这个对象
/* Vue.use(Vuex) */
const router = creatRouter()//返回一个new Router({ , ,routes:[]})
/* const store = creatStore() *///返回一个store实例

 /* router.beforeEach((to,from,next)=>{
    console.log('beforeEach')
    next()
})
//全局前置守卫
//next()的作用是，解析自身，然后进入管道的下一个钩子，钩子就是所谓的守卫
//当所有next()都被执行完了，导航的状态就是确认的

router.beforeResolve((to,from,next)=>{
    console.log('beforeresolve')
    console.log(router.currentRoute)//查看当前路由信息对象，比对两次路由信息对象beforeResolve与afterEach之间到底发生了什么
    next()
})
    

//全局解析守卫
//和 router.beforeEach 类似，
//区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
//导航指的是路由状态正在发生变化，这是一个过程，那么所谓的导航被确认，就是这个变化过程被确认

router.afterEach((to,from)=>{
    console.log('aftereach')
    console.log(router.currentRoute)//查看当前路由信息对象
})    
//全局后置钩子，没有next  */



new Vue({
    router,//使每个子组件都能使用到这个router对象，背后的原理跟provide有关
    /* store, *///与上面同理，跟vue的树形结构有关
    render:(h) => h(App)
}).$mount("#root");

//完整的导航解析流程
//导航被触发。
//在失活的组件里调用离开守卫。
//调用全局的 beforeEach 守卫。
//在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
//在路由配置里调用 beforeEnter。
//解析异步路由组件。
//(令人惊奇的是，当第一次载入网页的时候（就是刷新后），最外层的构件app.vue在此处开始生命周期)
//在被激活的组件里调用 beforeRouteEnter。
//调用全局的 beforeResolve 守卫 (2.5+)。
//导航被确认。(导航的确认表现为路由信息对象的更换)
//调用全局的 afterEach 钩子。
//触发 DOM 更新。(vue对象的生命周期开始，组件被渲染到router-view中)(包括子组件)
//用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。