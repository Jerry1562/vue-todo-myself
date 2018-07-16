import Vue from 'vue'

const child={
    props:{
        content:String
    },
    template:'<div v-on:click="changeData">name:{{content}}</div>',
    methods:{
        changeData(){
            this.$emit('change',this.content)
        }
    },
    mounted(){
        this.$on('change',(mag)=>{
            console.log(mag)
        })
    }
}

new Vue({
    el:'#root',
    components:{
        Childs:child
    },    
    template:`
    <div>
    <childs content="jerry"></childs>
    <childs content="tom"></childs>
    </div>
    `
})
