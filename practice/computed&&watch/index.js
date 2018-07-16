import Vue from 'vue'

new Vue({
    el:'#root',
    //使用字符串模板拼接
    //注意，template中只能有一个根节点
    template:`
    <div>
    <p>name:{{name}}</p>
    <p>name:{{creatName()}}</p>
    <p>number:{{number}}</p>
    <p>obj.a:{{obj.a}}</p>
    <p><input type="text" v-model="number"></p>
    <p><input type="text" v-model="obj.a"></p>
    </div>
    `,
    data:{
        FirstName :'jerry',
        LastName : 'liang',
        number:0,
        obj:{
            a:0
        }
    },
    computed:{
        name(){
            
                console.log('computed has benn called')
                return `${this.FirstName}*${this.LastName}`
           
        }//计算属性，其实就是name的get方法，同样也可以为它设置set属性，不过相当容易出现死循环，不推荐
    },
    //name()与creatName()两个函数都实现了相同的功能，在computed中的函数只有在与函数相关的两个变量改变时才被调用
    //而在methods中的函数，只要页面被重新渲染，都会被调用，这样会消耗大量的性能
    //因此对变量的处理应在computed中进行，methods中设置的应该是与事件相关的函数
    //同时，无论是在computed还是methods中，都不要对data中的变量本身的值进行修改，应当生成新的变量
    methods:{
        creatName(){
            console.log('creatname has been called')
            return `${this.FirstName}*${this.LastName}`
        }    
    },
    watch:{
        obj:{
            handler(newvalue,oldvalue){ //默认写法时，即没有显式地写出handler，其实本质上还是调用了此属性
                //此属性就是侦听器的处理函数
                console.log('obj.a has change')
            },
            immediate:true,//默认为false，如果选项为true，watch绑定data中数据的时候先执行一遍handler方法
            //deep:true//deep属性默认为false，如果没有设置，obj.a变化时，watch不起作用，设置为true，侦听器处于深度侦听模式
            //此时，对象的每一处变化都会触发侦听器，但是性能的损耗会增大，解决方案；在watch中把obj换成字符串'obj.a'
            //换成'obj.a'后系统会解析字符串，直接观察a属性，但是此时如果obj中有其他属性发生变化，watch无法观察到
        }
    }
})