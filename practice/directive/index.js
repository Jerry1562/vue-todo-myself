import Vue from 'vue'

new Vue({
    el:'#root',
    template:`
    <div>
    <p v-text="text"></p>
    <p v-html="html"></p>
    <p v-show="isShow">show me</p>
    <p v-if="isShow">if show me</p>
    <p v-else-if="number === 0">else if show me</p>
    <p v-else>else show me</p>
    <ul>
    <li v-for="(item,index) in arr" :key="item">{{item}}:{{index}}</li>
    </ul>
    <ul>
    <li v-for="(val,key,index) in obj" :key="val">{{val}}:{{key}}:{{index}}</li>
    </ul>
    <div>
    <input type="checkbox" :value="1" v-model="arr"><!--使用v-bind指令，相当于使value=1，如果不使用，value="1"-->
    <input type="checkbox" :value="2" v-model="arr"><!--简单来说，使用v-bind指令给value传入的是""中的内容，包括对象，数字，字符串-->
    <input type="checkbox" :value="3" v-model="arr">
    </div>
    <div>
    <input type="checkbox" :value="false" v-model="isShow">
    </div>
    <div>
    <input type="radio" value="jerry" v-model="text">
    <input type="radio" value="tom" v-model="text">
    <input type="radio" value="jack" v-model="text">
    </div>
    <p>{{mark}}</p>
    <input type="text" v-model.lazy="mark">
    </div>
    `,
    data:{
        text:'jerry',
        html:'<span>miss you</span>',
        isShow:false,
        number:1,
        arr:[1,2,3],
        obj:{
            a:123,
            b:345,
            c:232
        },
        mark:'',
    }
})
//v-text指令，用于在标签中显示文本内容，一般直接使用数据绑定{{text}}比使用指令更为便利
//v-html指令，用于向标签中插入HTML节点，当然是标签的子节点啦
//v-bind指令，用于数据绑定，可以为属性提供可变的值，如果绑定的变量不存在，那就相当于为此对象新建一个
//v-show指令，用于控制标签是否显示，如果为false，其实就是把标签样式的display属性设置为none
//v-if指令，用于控制标签是否在dom结构中，表面上与v-show一样，但v-show是通过修改样式隐藏标签，v-if是通过删除节点，需要重新生成dom结构，性能损耗非常大

//v-else-if指令，v-else指令，两者与v-if标签一脉相承，在if中判断为false，到else-if判断，如果这个标签的条件也是false，则显示else指令的标签
//三个指令中if与else-if可以写上判断语句，else不能，而且三者必须按顺序写在一起

//v-for指令，用于遍历数组或者对象，格式和参数参考例子
//注意，在v-for循环的时候为标签指定一个key属性有利于性能的优化，key属性应当使用v-bind写法，实现绑定变量的功能
//当列表中的数据发生变化时，vue会重新渲染整个列表，依靠key属性，如果key发生了变化，vue重新生成新的节点
//对于key没变的节点，vue会从缓存内取出节点复用，减少了生成节点的工作，因此，key应当是变化的那个参数

//v-on用于事件绑定，如果使用v-on的是标签，绑定的是method中的事件，如果使用v-on的是组件，相当于设置对象的$on属性，详情参考TODO

//v-model指令，实现双向数据绑定，即从v层向m层传值，一般与input标签一起使用
//多选框时与数组绑定，数组中有对应的value则为选中状态。单选框时与布尔值绑定。单选按钮时与某个变量绑定，选中按钮的value为变量的value
//当input为输入框时，可以使用v-model.number等限制输入的内容,有三个修饰符number,trim,lazy。trim过滤用户输入内容的首尾空白符
//lazy下数据不会随input内容的变化而变化，当发生change事件时才改变，一般来说，输入框失焦即能触发
//默认情况下，从input输入的都是字符串，如："0"
//v-model的内容官网有详细介绍

//v-pre指令，标签内包含的内容是什么，页面上就显示什么
//v-once指令，标签只加载一次，永远不会再加载，就是说刷新的时候是什么就是什么