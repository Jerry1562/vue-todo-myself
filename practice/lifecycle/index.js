import Vue from 'vue'

new Vue ({
    el:'#root',
    template:'<div>{{text}}</div>',
    data:{
        text:'aaa'
    },
    render:(h)=>h('div',{},'jerry'),
    //第一个参数为标签名，第二个参数为数据对象，比如说属性，事件，第三个参数是标签的内容(子节点)
    //在这里可以看出，render方法中的模板优先级比template中的模板优先级更高
    //template最后还是要调用render方法，因此直接使用render方法能提高应用的性能
    renderError:(h,err)=>h('div',{},err.stack),
    //此方法可以用在开发中，原理与render一致，只能识别本组件的error，不能冒泡
    errorCaptured:()=>{},
    //此方法与renderError一致，区别是它能捕获所有子组件的错误，可以用于生产环境中，用于捕获线上的错误
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
    },
    //对于一个生命周期来说，上面的四个事件只会执行一次
    //由data中的数据更新触发下面的事件
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    //由vm.$destory()触发下面的事件
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    }

})
//对于生命周期方法，具体可以去找生命周期图，我个人觉得有两个比较重要的时间段：

//在这段时间里，生命周期开始，周期事件开始建立
//beforeCreate与created之间
//初始化阶段，数据开始注入和反应（官网直接翻译，我的理解是对数据进行处理使其获得驱动的能力），data的数据开始生成
//在created事件时，数据已经处理完成，可以对数据进行操作

//created与beforeMount
//首先会去寻找el属性，如果没有，等待vm.$mount(el)函数被调用（此时生命周期是停止的），这一步是为了获取dom目标节点

//第二步寻找是否有template属性，如果有，则调用render方法处理html模板
//如果没有，用目标节点的html模板进行编译
//模板节点在这个时间段被生成

//beforeMount与mounted
//在这个过程中，模板生成了一个新的节点，el本来保存的是目标节点，被替换成由模板生成的节点

//总结一下，在created时才开始能进行数据操作
//在beforeMount时，el保存的是目标DOM节点
//在mounted时，el中的目标节点已经被替换成由template生成的DOM节点

//关于render方法，传入一个h参数，h参数就是creatElement()
//使用虚拟dom来渲染节点提升性能，因为它是基于JavaScript计算。通过使用createElement(h)来创建虚拟dom节点。
//createElement是render的核心方法。其Vue编译的时候会把template里面的节点解析成虚拟dom；
//也就是VNode，VNode本质上就是一个js类，里面保存的是虚拟dom的各种参数
//对DOM的任何操作都是通过虚拟DOM进行代理的，这样可以进行局部渲染，无须重新渲染整个页面
//简单的理解，就是render方法返回了一个虚拟DOM节点

 