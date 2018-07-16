import Vue from 'vue'

const grendson={
    template:`<h1>{{ages.name}}</h1>`,
    inject:['ages']
}

const component={
    components:{
        compson:grendson
    },
    template:`
    <div :style="style1">
    <div class="header">
    <slot name="header"></slot>
    </div>
    <div class="footer">
    <slot name="footer" pname="gloria" :page="age"></slot><!--具名插槽，可以直接传值,也可以使用v-bind传变量-->
    </div>
    <compson></compson>
    </div>
    `,
    data(){
        return{
            style1:{
                width:'200px',
                height:'200px',
                border:'20px solid green'  
            },
            age:26
        }
    }
}


new Vue({
    el:"#root",
    components:{
        compOne:component
    },
    /* provide:{
        age:'grandfather'//直接传入确定值的键值对时，provide使用属性写法
    }, */
    /* provide(){
        return{
            age:this.name//在传入provide的值为vue对象本身属性时，应使用函数写法
        }                //因为在使用provide属性是，vue对象本身的数据还没生成完整，因此无法调用 
    }, */
    //provide属性的意图是面对所有的子孙组件暴露自己的数据接口，与props差不多的道理，props是子组件向父组件暴露自己的数据接口
    //子孙组件应该使用inject属性调用provide暴露的数据，但provide中的值没有数据响应的功能，那么意味着，它的变化无法驱动视图进行变化
    provide(){
        const ages={}
        Object.defineProperty(ages,'name',{
            get:()=>{
                console.log('provide')
                return this.name//能使用ge 当this.name变化时，与this.name相关的值也会被重新调用
            },                  //因此，ages.name也被重新调用，调用其中的get方法，
            Enumerator:true     //很显然data中的属性也会被vue经过相似的处理过程，获得了get/set方法,因此有了驱动能力
        })//Enumerator属性设置为可读
        return{
            ages
        }
    },//此方法为hack方法，官方不推荐使用，实现了provide中数据驱动的效果
    data:{
        name:'jerry'
    },
    mounted(){
        console.log(this.$refs.firstnode.age)//此例子演示$refs的使用,ref绑定的是组件对象则返回组件对象
        console.log(this.$refs.secondnode)//绑定的是标签则返回对应的标签，千万别滥用
    },
    template:`
    <div>
    <comp-one ref="firstnode"><!--绑定了一个组件，也就是一个对象-->
    <span slot="footer" slot-scope="data">{{data.page}} {{data.pname}}</span><!--使用slot-scope拿到子组件中slot中的值-->
    <span slot="header">this is header</span>
    </comp-one>
    <h1 ref="secondnode">kiss me</h1><!--绑定了一个标签-->
    <input type="text" v-model="name">
    </div>`
})
//要在组件标签内使用标签，必须要引入插槽的概念，通过预先在组件内设置插槽<slot>，标签会自动被放到插槽中
//同时，引入具名插槽的概念<slot name=""></slot>,通过名字有序地放置标签，无论组件标签包含标签的顺序是什么
//这说明了组件内标签的分布是在组件自身构造函数内确定的，就是插槽的位置

//可在slot中向插进来的标签传变量aaa，标签使用slot-scope="xxx"接收，在标签内以xxx.aaa的形式使用变量的值，人称作用域插槽
