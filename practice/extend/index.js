//组件的以下行为，都是一种继承，通过继承，组件的可以利用其它组件进行功能的拓展
import Vue from 'vue'

const compnent={
    props:{
        textOne:{
            type:String,
            default:'kiss me'
        }
    },
    template:`
    <div>
    <h1 v-on:click="changeAct">{{textOne}}</h1>
    <h2>{{text}}</h2>
    </div>
    `,
    data:function(){
        return {
            text:'gloria'
        }
    },
    mounted:function(){
        console.log('compnent mounted')
    },
    methods:{
        changeAct(){
            this.$emit('changeAct')//此事件也会被继承到compnent2中，因此在父组件可以为此事件设置响应事件
        }
    }
}

//const compNew = Vue.extend(compnent)//extend的作用，相当于以component为构造的模板，创建一个新的Vue子类

//extend的另外一种用法，对象内引用，主要用于拓展组件
const compnent2 = {
    extends:compnent,//compnent2使用了compnent为扩展，data部分会进行覆盖处理，新值取代旧值
    data(){
        return{
            text:'jerry'
        }
    },
    mounted:function(){
        console.log(this.$parent.$options.name)//this.$parent.$options.name用于调用父组件中的name属性
    }
}

/* new compNew({
    el:'#root',
    propsData:{
        textOne:'kiss me o'//propsDate用于给compnent中的props传值
    },
    data:{
        text:'jerry'//给date传值，会把原对象component中的值覆盖掉
    },
    mounted:function(){
        console.log('compNew mounted')//先调用component中的mounted方法，再调用新实例中的mounted方法
    }
}) *///多用于测试中

const parent = new Vue({
    name:'parent'
})//创建一个新的Vue对象，名为parent，用于测试下面对象的parent属性

new Vue({
    parent:parent,//parent属性用于指定此组件的父组件，两者建立父子关系，只能在使用new Vue新建对象中使用
    name:'father',
    el:'#root',
    components:{
        Comp2:compnent2
    },
    template:`
    <div>
    <comp2 text-one="fuck me" @changeAct="changeAct"></comp2>
    </div>
    `//注意，如何为组件中的props传值，像普通传值方法传即可
    ,
    mounted(){
        console.log(this.$parent.$options.name)
    },
    methods:{
        changeAct(){
            console.log('click me')
        }
    }
})



