import Vue from 'vue'

new Vue({
    //el:'#root',
    
    //以下是标签内容的写法
    //template:'<h1>{{text}}</h1>',//直接显示属性的值
    
    //template:'<div>{{text ? `active` : `noactive`}}</div>',//也可以进行简单的运算，此处括号内使用的是点
    
    //template:'<div>{{arr.join(` `)}}</div>',//数组的运算
    
    //template:'<div>{{Date.now()}}</div>',//原生的全局变量（非自定义）

    //template:<div>{{joinArr(arr)}}</div>,//传入的是methods中的方法joinArr,效果与arr.join('')相同，不推荐使用
    
    //以下是设置标签属性的写法，要使用v-指令
    /*  template:
    `<div v-bind:class="lock" v-on:click="clickIt">
    
    <h1 v-html="html"></h1>  
    </div>`, */
    //当变量内容为HTML代码时，要使用v-html指令引入html代码，否则代码会直接显示出来
    //使用v-bind指令可以为属性绑定一个动态的值，简写为冒号，标签要用data中的值，都要用v-bind
    //使用v-on可以为标签绑定事件,事件可以在methods属性里面声明，简写为@
    
    template:
    /* <div v-bind:class="{active:isActive}"> */
    
    /* <div v-bind:class="[isActive?'active':'enactive']"> */
    `
    <div v-bind:class="[{active:isActive}]"
    v-bind:style="[styles2,styles]">
    <p v-html="html"></p>
    </div>`,
    //{active:isActive}:如果isActive的值为true,class=active,如果为false，则不给class赋值，对象写法
    //[isActive?'active':'enactive']:三元表达式，写在数组内，数组写法
    //[{active:isActive}]:数组包含对象的写法，可以利用数组的特性传进多个class
    //此处style可以看出，在数组中，属性越靠后的值，其优先度更高，因为后面的样式会覆盖前面的样式
    //同时，对于样式中一些需要加前缀的声明，vue会根据浏览器自动补全
    data:{
        text:false,
        arr:[1,2,3],
        html:'<span>jerry miss you</span>',
        lock:'locket',
        isActive:true,
        styles:{
            color:'red',//注意，属性值颜色名使用的是字符串写法
            background:'green'
        },
        styles2:{
            color:'yellow'
        }
    },
    methods:{
        clickIt(){
            alert('click')
        },
        joinArr(arr){
            return arr.join(' ')
        }    
    }

}).$mount('#root')
