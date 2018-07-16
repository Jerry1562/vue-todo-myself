import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        count:0,
        people:{
            name:'jerry'
        }
    },
    mutations:{
        increase(state){
            state.count++
        },
        add(state,payload){
            state.people={...state.people,...payload}
        }
    },
    getters:{
        add1(state){
            return state.count+1     //返回一个值
        },
        add2(state,getters){
            return getters.add1+1    //使用getters作为第二个参数
        },
        add3(state){
            return (id)=>{
                return state.count+id   //返回一个函数
            }
        }
    },
    modules:{
        a:{
            namespaced:true,
            state:{
                text:1
            },
            getters:{
                take(state){
                    return state.text
                }
            }
        },
        b:{
            namespaced:true,
            state:{
                text:2
            },
            getters:{
                take(state){
                    return state.text
                }
            },
            actions:{
                
            }
        }
    }
})

const count={
    template:`<div><button @click="increase">+</button><h1>{{count}}</h1>
                    <button v-on:click="add">add</button></div>`,
    methods:{
        increase(){
            this.$store.commit('increase')
            console.log(this.$store.getters['a/take'])
        },
        add(){
            this.$store.commit("add",{sex:'man'})
        }
    },
    computed:{
        count(){
            return this.$store.getters['add3'](3)
        }
    }
}

new Vue ({
    store,
    el:'#root',
    components:{
        Comp:count
    },
    template:`<div :style="style1"><h1>{{name}}</h1><Comp></Comp></div>`,
    data(){
        return{
            name:'jerry',
            style1:{
                display:'table',
                margin:'auto auto',
                color:'green'
            }
        }
    }
})