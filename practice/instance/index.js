import Vue from "vue";


const app = new Vue({
    //el: '#root',                //挂载采取的策略是替换指定的节点，此处是div#root节点
    template:'<h1 ref="point">{{text}}</h1>',//挂载到template.html指定的节点上，此处是div#root                                   
    data:{
        text: 0 ,

    },
    //watch:{
    //    text(newValue,oldValue){
    //        console,log(`${newValue}:${oldValue}`)
    //    }
    //}//watch的另一种写法，此watch会随对象一起被销毁
})                                          
//作用与app.$el相同，用于把vue对象挂载到某一个Dom节点上
app.$mount('#root')


setInterval(()=>{
    app.text += 1
},1000)

//vue自带的属性于方法前都有一个前缀$，为了与自定义的属性与方法进行区分

//data是一个对象，里面的数据就是属性，可用'app.$data.text'访问
//此对象会被Vue实例代理，因此可以使用vue对象访问，如app.text
//console.log(app.$data)

//
//console.log(app.$props)

//app.$el指向的是挂载到HTML文件上的DOM节点，它是节点的引用
//在此处是<h1></h1>
//console.log(app.$el)

//app.$options指向的是初始状态下的vue对象，就是一开始传入构造函数里面的那个
//通过修改$options.data来修改app.data是不可行的,初始化后两者被隔离
//console.log(app.$options)

//$root指向的是vue树状结构的根节点，一堆层层依赖的组件就构成了vue的树状结构
//根节点就是挂载在HTML文件里的vue对象，如例子中的对象app
//不同的组件就是不同的对象节点,我们可以在树上的任何一个节点中使用$root指向根节点 
//console.log(app.$root === app)

//$children是一个数组,存的是的当前实例的直接子组件,如<item><div></div></item>,item组件中的div标签
//div作为children被传入item组件中
//console.log(app.$children)
//console.log(app.$parent)

//$refs.xxx的作用是获取带有ref属性的节点，当在dom元素上时，引用指向的是dom元素，
//在组件上时，引用指向的是vue对象实例,在父组件中调用，能帮助我们快速定位到不同的位置
//console.log(app.$refs.point)

//判断代码能否在服务端运行,在做服务端渲染时会使用
//console.log(app.$isServer)

//默认的方法
//watch方法的作用是监听对象上指定值的变化，如此处的text
//自动传入新值、旧值两个参数
//为了避免内存溢出，watch要进行销毁
//写在对象外需手动销毁，写在对象内在会随对象一起被销毁
//const unWatch = app.$watch('text',(newValue,oldValue) => {
    //console.log(`${newValue}:${oldValue}`)
//})
//unWatch()//利用返回的方法手动触发事件注销watch

//以下两个事件应该配套使用，分别是$on和$emit
//$on用于创建事件监听，$emit用于触发事件
//两者要作用于同一个vue对象才能生效,常被用在子组件与父组件的通信
//例子如下
//app.$on('test',(a,b) => {
    //console.log(`事件被触发 ：${a}和 ${b}`)//创建事件test并监听
//})
//app.$emit('test',1,2)//触发事件test

//$once的使用与$on基本上一致，唯一的不同点就是$once只能被触发一次
//app.$once()

//调用此方法会使页面重新渲染一次，vue采用的是数据驱动页面渲染，但前提是数据必须在创建实例的时候被声明
//不满足此前提的变量，在变化时无法驱动页面重新渲染，可以采取此方式触发渲染
//app.$forceUpdate()

//$set方法可以有效解决上面的问题，通过$set声明的值，与在创建实例时声明是一样的
//相当于把声明补上去，就能获得数据驱动的能力
//app.$set(app.obj,'a',i)传入对象，值名，值

//此方法可以用于删除对象的属性，完全的删除，避免数据溢出
//删除会触发视图的更新
//app.$delete(target,key)//对象、属性

//此方法，是等待DOM结构绘制完成后调用方法中的function
//app.$nextTick(function(){})

//理解vue的更新方式：vue的更新方式是异步更新，页面更新发生在数据稳定的时候，并不是随数据的变化而变化
//比如说，对属性text进行连续5次的自增运算，直观来说就是5条连续的自增语句
//在最后一条语句执行完成的时候，才进行DOM的更新




