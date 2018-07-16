import Vue from 'vue'

const component={
    model:{
        prop:'name1',
        event:'changeData'//解除v-model对props变量名value,触发事件名input的限制
    },
    props:['name1'],
    template:`
    <div>
    <input type="text" @input="changeValue" :value="name1">
    </div>
    `,
    methods:{
        changeValue(e){
            this.$emit('changeData',e.target.value)
        }
    }

}

new Vue({
    el:`#root`,
    components:{
        compOne:component
    },
    template:`
    <div>
    <comp-one  @changeData="name = arguments[0]" :name1="name"></comp-one><!--原理式写法-->
    <comp-one v-model="name"></comp-one><!--v-model省略式写法-->
    <input type="text" v-model="name">
    <h1>{{name}}</h1>
    </div>
    `,//在此处的input标签可以尝试使用v-bind指令，发现，修改输入框的数据，name值没有变化，说明v-bind数据绑定只能使数据由m层传向v层
    //而v-model指令能使数据双向流动，果然是双向数据绑定
    
    //在父子组件之间，子到父通过$emit，父到子通过子组件的props，进行数据交换，这也是v-model的原理
    //v-model使用默认值时，props使用的值为value，emit使用的事件名为input，要解除两个默认值的限制，可以在子组件中使用model属性
    data:{
        name:'jerry'
    },
     /* methods:{
        changeData(sonValue){
            this.$data.name=sonValue
        } 
    } */
})