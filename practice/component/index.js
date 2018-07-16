import Vue from 'vue'

const component={
    props:{
        activeOne:{
            //type:Boolean,//数据类型限制，允许多个类型，使用数组表示[Boolean,String,Number]
            //required:true,//是否必须传值
            
            //default:false//不传值时的默认值
            
            /* default:function(){
                return {message:'hello'}
            }           *///当类型是Object时使用一个匿名函数返回一个对象
            
            validator:function(value){
                return typeof value === 'boolean'
            }//自定义规则，规则写在return后面，结果是false则不能通过，是true才能通过
        }
    },
    template:`
    <div>
    <h2>son miss you {{text}}</h2>
    <p @click="changeBoolean">{{ activeOne ? "true" : "false" }}</p>
    </div>
    `,
    data:function(){
        return{
            text:123
        }
    },
    methods:{
        changeBoolean(){
            this.$emit("changeBoolean")
        }
    }
} 

//Vue.component('CompOne',component)

new Vue({
    components:{
        CompOne:component
    },
    el:'#root',
    template:`
    <div>
    <h1>parent miss you</h1>
    <comp-one  :activeOne="invalue" @changeBoolean="changeBoolean"></comp-one>
    </div>
    `
    ,
    data:{
        invalue:true
    },
    methods:{
        changeBoolean(){
            this.invalue = !this.invalue
        }
    }
})
//Vue.component方式注册全局组件，在为组件命名的时候首字母大写并使用驼峰命名
//在使用组件时，为小写加横杠分隔符
//要在某个vue对象内注册组件，要使用components属性，在属性对象内用键值对写法
//注册组件时,传入的对象中的data属性的值，必须是一个function，而且要用return返回数据
//事实上，每使用一次组件，就是创建一个对象的实例
//如果没有此限制，那么他们的data会公用data内的变量，相当于全局变量
//一个组件对数据的修改，会导致其他所有同类型的组件发生变化


//props用于为组件传入特定的数据，数据来自父组件，子组件接收，使用这个的目的是使组件能在不同的位置发挥更好的作用
//虽然，组件大体上是一样的，通过props能使他们各有差异
//注意，不应该在子组件中修改父组件传过来的数据，props应该用于单向数据传递，可以通过v-on配合$emit通知父组件对数据进行修改
//props中的数值同样要使用驼峰格式，在父组件中传值的时候可以使用横杠连接符与小写格式

