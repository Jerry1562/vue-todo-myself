import Vue from 'vue'
import chart from './charts'
import chart2 from './charts2'

 

new Vue({
    el:'#root',
    template:`
    <div>

    <div :style="style2">
    <div v-for="(item,key) in role" :key="item">
    {{item}}:<input type="text" v-model="age[key]">
    </div>
    </div>

    <button @click="changeAge">click</button>

    <div id="chart" :style="style"></div>

    <div id="chart2" :style="style3"></div>

    </div>
    `,
    data(){
        return{
        charts:'',
        role:['father','mother','me','sister'],    
        age:[],
        style:{
            width:'600px',
            height:'400px',
            margin:'0 auto'
        },
        style2:{
            textAlign:'right',
            display:'table',
            margin:'0 auto',
            lineHeight:'40px'
        },
        style3:{
            width:'900px',
            height:'900px',
            margin:'0 auto',
            border:'1px solid blue'
        }
    }
},
    mounted(){
       this.charts=chart()
       chart2()
    },
    methods:{
        changeAge(){
         this.charts.setOption({
             series:[{
                 name:'age',
                 data:this.age
             }]
         })
        }
    }
})
