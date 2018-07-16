import Vue from 'vue';
import Router from 'vue-router';
import '../../client/assets/styles/textrouter.styl'

Vue.use(Router);

const first={
    template:`<div><h1 :style="first">Body1</h1>
              </div>`,
    data(){
        return{
            first:{
                display:'table',
                margin:'auto auto',
                color:'blue'
            },
            text:'aaa'
        }
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log('routerEnter 组件内');
        next();
    },
    beforeRouteUpdate:(to,from,next)=>{
        console.log('routerUpdate 组件内');
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log('routerLeave 组件内');
        next();
    }, beforeCreate(){
        console.log('beforeCreate')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    created(){
        console.log('created')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    beforeMount(){
        console.log('beforeMount')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    mounted(){
        console.log('mounted')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
}

const second={
    template:`<div><h1 :style="second">Body2</h1>
                   </div>`,
    data(){
        return{
            second:{
                display:'table',
                margin:'auto auto',
                color:'green'
            },
            text:'aaa'
        }
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log('routerEnter 组件内');
        next(()=>{
            console.log('回调');
        });
    },
    beforeRouteUpdate:(to,from,next)=>{
        console.log('routerUpdate 组件内');
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log('routerLeave 组件内');
        next();
    }, beforeCreate(){
        console.log('beforeCreate')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    created(){
        console.log('created')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    beforeMount(){
        console.log('beforeMount')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    mounted(){
        console.log('mounted')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
}

const routes=[
    {
        path:'/',
        redirect:'/first'
    },
    {
        path:'/first',
        component:first,
        beforeEnter:(to,from,next)=>{
            console.log('beforeEnter,路由内');
            next();
        }
    },
    {
        path:'/second',
        component:second,
        beforeEnter:(to,from,next)=>{
            console.log('beforeEnter,路由内');
            next();
        }
    }
]

const router=new Router({
    routes:routes,
    mode:'hash',
    linkActiveClass:'actived',
    linkExactActiveClass:'actived1',
    fallback:true,
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return{
                x:0,
                y:0
            }
        }
    }
})                            //路由

/* 三个全局导航守卫 */
router.beforeEach((to,from,next)=>{
    console.log('beforeEach,全局');
    next();
})
router.beforeResolve((to,from,next)=>{
    console.log('beforeResolve,全局');
    next();
})
router.afterEach((to,from)=>{
    console.log('afterEach,全局');
})

new Vue({
    router,
    el:'#root',
    template:`<div>
              <router-link to="/first">first</router-link>
              <router-link to="/second">second</router-link>
              <h1 :style="style1">Head</h1>
              <router-view/>
              <h1 :style="style1">Foot</h1>
              </div>
              `,
    data(){
        return{
            style1:{
              display:'table',
              margin:'auto auto'
            },
            text:'bbb'
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    created(){
        console.log('created')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    beforeMount(){
        console.log('beforeMount')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    },
    mounted(){
        console.log('mounted')
        console.log('el:',this.$el)
        console.log('data:',this.$data)
        console.log('text:',this.text)
    }
})
