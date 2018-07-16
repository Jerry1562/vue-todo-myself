import Vue from 'vue'

const component={
    props:{
        header:String,
        footer:String
    },
    template:`
    <div>
    <div>
    <slot name="header" :data="name1"></slot>
    <input type="text" @input="changeHeader" :value="header">
    <h3>{{header}}</h3>
    </div>
    <div>
    <slot name="footer" :data="name2"></slot>
    <input type="text" @input="changeFooter" :value="footer">
    <h3>{{footer}}</h3>
    </div>
    </div>
    `,
    render(h){
        //子标签数组
        let son=[]
        //slot插槽应该用对象this.$slot或者this.$scopedSlots表示，完整写法this.$scopedSlot.default，如果插槽有name，把default换成name
        //这两个对象就是<slot></slot>的本质，因此在父组件中使用插槽其实是把生成的VNode放在这两个对象的属性中，属性名就是name，两个对象代表两种不同的插槽类型
        son[0]=h('div',{},[
            this.$scopedSlots.header({
                data:this.name1
            }),
            h('input',{
                type:'text',
                value:this.header,
                on:{
                    input:this.changeHeader
                }
            }),
            h('h3',{},this.header)            
        ]),
        //
        son[1]=h('div',{},[
            this.$scopedSlots.header({
                data:this.name2
            }),
            h('input',{
                type:'text',
                value:this.footer,
                on:{
                    input:this.changeFooter
                }
            }),
            h('h3',{},this.footer)            
        ])
        //返回VNode
        return h('div',{},son)
    },
    data(){
        return{
            name1:"Header",
            name2:"Footer"
        }
    },
    methods:{
        changeHeader(e){
            this.$emit('changeHeader',e.target.value)
        },
        changeFooter(e){
            this.$emit('changeFooter',e.target.value)
        }
    }
}

new Vue ({
    el:'#root',
    template:`
    <div>
    <h1>jerry</h1>
    <comp-one :header="header" :footer="footer" @changeHeader="changeHeaderFather" @changeFooter="changeFooterFather">
    <span slot="header" slot-scope="data1">{{data1.data}}</span>
    <span slot="footer" slot-scope="data2">{{data2.data}}</span>
    </comp-one>
    </div>
    `,
    //当有render方法时，template方法就不会被调用了，template本质上也是调用了render方法，这个调用的动作由vue-loader执行
    render(h){
        return h('div',{},
        [
            h('h1',{
                on:{
                    click:this.change
                }
            },"jerry"),
            h('comp-one',{
                //props中的值放在props对象中
                props:{
                header:this.header,
                footer:this.footer
                },
                //调用的方法写在on
                on:{
                changeHeader:this.changeHeaderFather,
                changeFooter:this.changeFooterFather
                },
                //此处便是关于scopedSlots的使用，
                //采用name:props=>h('',props.data)的格式
                //scopedSlots对象不同的属性都是一个VNode,属性名都是对应的插槽名
                scopedSlots:{
                    header:data1=>h('span',data1.data),
                    footer:data2=>h('span',data2.data)
                },
                
                }
            )
    ]
    )
    },
    components:{
        compOne:component
    },
    data:{
        header:'',
        footer:''
    },
    methods:{
        change(){
            console.log('click it')
        },
        changeHeaderFather(data){
            this.header=data
        },
        changeFooterFather(data){
            this.footer=data
        }
    }
})
//主要讲了render(h){return h()}方法，h()函数会返回一个VNode
//h参数为creatElement方法，第一个参数为标签名，第二个参数是一个data对象，主要保存一些标签上的属性
//最后一个参数是标签/插件包含的内容，如果有子标签，应使用数组按顺序保存，如果是文本，则直接填写
//nativeOn与on的区别在于nativeOn会选择绑定的方式，当nativeOn在组件上使用的时候，nativeOn中的事件会绑定到离它祖孙关系最近的一个原生标签祖先上
//在原生的DOM标签上使用的时候，事件会绑定到标签本身,而且他只能用在自定义的组件中